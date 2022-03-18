// /**
//  * @param {number} capacity
//  */
// var LRUCache = function(capacity) {
//   this.capacity = capacity;
//   this.pool = new Map();
//   this.stack = []
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function(key) {
//   if(!this.pool.has(key)) return -1;
//   let index = this.stack.indexOf(key)
//   this.stack.splice(index, 1)
//   this.stack.unshift(key);

//   return this.pool.get(key);
// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function(key, value) {
//   if(this.pool.has(key)) {
//     let index = this.stack.indexOf(key)
//     this.stack.splice(index, 1)
//   }

//   this.pool.set(key,value)
//   this.stack.unshift(key)

//   if(this.stack.length > this.capacity) {
//     this.pool.delete(this.stack[this.stack.length - 1]);
//     this.stack.pop();
//   }

//   return [key, value]
// };

//Map是有序的，map.keys()可以返回一个可迭代对象，通过其可以获取有序的key
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.map = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if(!this.map.has(key)) return -1;

  let val = this.map.get(key);
  this.map.delete(key)
  this.map.set(key, val);

  return val
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
 LRUCache.prototype.put = function(key, value) {
  if(!this.map.has(key)) {
    this.map.set(key,value)
    if(this.map.size > this.capacity) {
      this.map.delete(this.map.keys().next().value)
    }
  }else {
    this.map.delete(key)
    this.map.set(key, value);
  }

  return null
};