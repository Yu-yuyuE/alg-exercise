let file;

axios.default.baseURL = 'http://localhost:8080';

document.getElementById('file').onchange(({target: {files}}) => {
    file = files[0]
})

document.getElementById('upload').onclick(() => {
    if(!file) return
    let size = 1024 * 50
    let index = 0
    const fileChunks = []
    for(let i = 0; i < file.size; i += size) {
        fileChunks.push({
            chunk: files.slice(i, i + size),
            hash: index++
        })
    }

    const uploadHandler = (list) => {
        if(list.length === 0) {
            axios({
                method: 'GET',
                url: '/finish',
                params: {
                    fileName: file.name
                }
            })
            console.log('上传完成');

            return
        }

        let pool = []
        let max = 3
        let failList = []
        let finish = 0

        for(let i = 0; i < list.length; i++){
            let item = list[i]
            const formData = new FormData()
            formData.append('filename', file.name)
            formData.append('hash', item.hash)
            formData.append('chunk', item.chunk)
            const task = axios({
                method: 'POST',
                url: '/upload',
                data: formData
            })

            task.then(() => {
                // 上传成功则删除并发池中完成的任务
                let index = pool.findIndex(t => t === task)
                pool.splice(index, 1)
                finish++
            }).catch(() => {
                failList.push(item)
            }).finally(() => {
                if(finish < list.length){
                    uploadHandler(failList)
                }
            })

            pool.push(task)

            if(pool.length >= max){
                // 当并发池中的任务数超过容量，就开始执行上传任务，完成后会被删除
                await Promise.race(pool)
            }
        }
    }

    uploadHandler(fileChunks)
})