function dropElements(arr, func) {
  // Drop them elements.
  let out = [];
  let last = 0;
  let truthy = arr.some(function(entry, idx) {
    if (func(entry)) {last = idx; return true;}});
 
  return truthy ? arr.slice(last) : [] ;     
} 
