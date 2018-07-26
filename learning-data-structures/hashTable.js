/*
A Hash table is a very powerful data structure because they provide us with constant time lookup AND insertion


Hash time complexity
╔═══════════╦═════════╦════════════╗
║ Algorithm ║ Average ║ Worst Case ║
╠═══════════╬═════════╬════════════╣
║ Space     ║         ║            ║
║ Search    ║ O(1)    ║ O(n)       ║
║ Insert    ║ O(1)    ║ O(n)       ║
║ Delete    ║         ║            ║
╚═══════════╩═════════╩════════════╝
*/

function Node(key, value, next){
  this.key = key;
  this.value = value;
  this.next = next || null;
}

function HashTable(size){
  this.size = new Array(size);
  this.buckets = this.size.length;
}

let hashy = new HashTable(30);