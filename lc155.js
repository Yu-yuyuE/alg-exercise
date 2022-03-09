// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

// 实现 MinStack 类:

// MinStack() 初始化堆栈对象。
// void push(int val) 将元素val推入堆栈。
// void pop() 删除堆栈顶部的元素。
// int top() 获取堆栈顶部的元素。
// int getMin() 获取堆栈中的最小元素。

var MinStack = function() {
  this.min = [Infinity];
  this.stack = [];
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  this.stack.unshift(val);
  if(val <= this.min[0]) {
    this.min.unshift(val);
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  if(this.stack[0] === this.min[0]) this.min.shift()
  this.stack.shift();
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[0];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.min[0] === Infinity ? null : this.min[0];
};