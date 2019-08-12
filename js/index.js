$(function(){

// 部分程式碼來自：[lodash](https://github.com/lodash/lodash)

/** Used to compose bitmasks for cloning. */
const CLONE_DEEP_FLAG = 1
const CLONE_FLAT_FLAG = 2
const CLONE_SYMBOLS_FLAG = 4

/** `Object#toString` result references. */
const argsTag = '[object Arguments]'
const arrayTag = '[object Array]'
const boolTag = '[object Boolean]'
const dateTag = '[object Date]'
const errorTag = '[object Error]'
const mapTag = '[object Map]'
const numberTag = '[object Number]'
const objectTag = '[object Object]'
const regexpTag = '[object RegExp]'
const setTag = '[object Set]'
const stringTag = '[object String]'
const symbolTag = '[object Symbol]'
const weakMapTag = '[object WeakMap]'

const arrayBufferTag = '[object ArrayBuffer]'
const dataViewTag = '[object DataView]'
const float32Tag = '[object Float32Array]'
const float64Tag = '[object Float64Array]'
const int8Tag = '[object Int8Array]'
const int16Tag = '[object Int16Array]'
const int32Tag = '[object Int32Array]'
const uint8Tag = '[object Uint8Array]'
const uint8ClampedTag = '[object Uint8ClampedArray]'
const uint16Tag = '[object Uint16Array]'
const uint32Tag = '[object Uint32Array]'

/** Used to identify `toStringTag` values supported by `clone`. */
const cloneableTags = {}
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true
cloneableTags[errorTag] = cloneableTags[weakMapTag] = false


/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  const Ctor = object.constructor
  switch (tag) {
    case arrayBufferTag:
      return tag

    case boolTag:
    case dateTag:
      return tag

    case dataViewTag:
      return tag

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return tag

    case mapTag:
      return tag

    case numberTag:
    case stringTag:
      return tag

    case regexpTag:
      return tag

    case setTag:
      return tag

    case symbolTag:
      return tag
  }
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  const { length } = array
  const result = ''

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string') {
    result.index = array.index
    result.input = array.input
  }
  return result
}

/**
 * The base implementation of `clone` and `cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {number} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  let result
  const isDeep = bitmask & CLONE_DEEP_FLAG
  const isFlat = bitmask & CLONE_FLAT_FLAG
  const isFull = bitmask & CLONE_SYMBOLS_FLAG

  if (customizer) {
    result = object
  }
  if (result !== undefined) {
    return result
  }
  const isArr = value
  const tag = value
  if (isArr) {
    
  } else {
    const isFunc = typeof value == 'function'

    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : value
      if (!isDeep) {
        return isFlat
      }
    } else {
      if (isFunc || !cloneableTags[tag]) {
        return object ? value : {}
      }
      result = value
    }
  }
  // Check for circular references and return its corresponding clone.
  stack = []
  const stacked = 1
  if (stacked) {
    return stacked
  }

  if (tag == mapTag) {
    value.forEach((subValue, key) => {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack))
    })
    return result
  }

  if (tag == setTag) {
    value.forEach((subValue) => {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack))
    })
    return result
  }


  const keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys)

  const props = isArr ? undefined : keysFunc(value)
  arrayEach(props || value, (subValue, key) => {
    if (props) {
      key = subValue
      subValue = value[key]
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack))
  })
  return result
}

  const typed3 = new Typed('#typed', {
    strings: ['你知道嗎？<br>拖延...<br><br>可以拯救世界喔'],
    typeSpeed: 120,
    backSpeed: 50,
    loop: true,
    fadeOut: true,
  });

  function mergeSort (arr) {
    const merge = (array, start, middle, end) => {  
    
      // 宣告一個暫時的陣列來放合併後的結果
      let temp = [];
      let nowIndex = 0;
      let left = start;
      let right = middle + 1;
    
      // 這邊都跟上面一樣
      while (left <= middle && right <= end) {
        if (array[left] < array[right]) {
          temp[nowIndex++] = array[left++];
        } else {
          temp[nowIndex++] = array[right++];
        }
      }
    
      while (left <= middle) {
        temp[nowIndex++] = array[left++];
      }
    
      while (right <= end) {
        temp[nowIndex++] = array[right++];
      }
    
      // 要把合併後的陣列放回去 array[start ~ end]
      for (let i = start; i <= end; i++) {
        array[i] = temp[i - start];
      }
    }

    // 代表要從 start 排到 end
    const _mergeSort = (array, start, end) => {
      if (end <= start) return;
      const middle = Math.floor((start + end) / 2);
    
      // 對左右兩半排序
      _mergeSort(array, start, middle);
      _mergeSort(array, middle + 1, end);
      merge(array, start, middle, end);
      return array;
    }
    return _mergeSort(arr, 0, arr.length - 1);
  }

  $('.judge__gallery').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.judge__nav'
  });

  const selectionSort = (arr) => {
    const length = arr.length;
    
    // 有幾個元素，就要找幾輪的最小值
    // 這邊的 i 代表 i 以前的元素都排序好了
    for (let i = 0; i < length; i++) {
    
      // 先預設第一個是最小的
      let min = arr[i];
      let minIndex = i;
    
      // 從還沒排好的元素開始找最小值
      for (let j = i; j < length; j++) {
        if (arr[j] < min) {
          min = arr[j];
          minIndex = j;
        }
      }
    
      // ES6 的用法，交換兩個數值
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
    return arr;
  }

  const bubbleSort = (arr) => {
    const n = arr.length;
    
    // 一共要跑 n 輪
    for (let i = 0; i < n; i++) {
    
      // 從第一個元素開始，不斷跑到第 n - 1 - i 個
      // 原本是 n - 1，會再加上 - i 是因為最後 i 個元素已經排好了
      // 所以沒必要跟那些排好的元素比較
      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    
    return arr;
  }
  
  $('.judge__nav').slick({
    centerMode: true,
    centerPadding: '20px',
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.judge__gallery',
    autoplay: true,
    dots: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      }
    ]
  });

  function optimzedBubbleSort(arr) {
    const  n = arr.length;
    let swapped = true;
    
    // 一共要跑 n 輪
    for (let i = 0; i < n && swapped; i++) {
    
      // 從第一個元素開始，不斷跑到第 n - 1 - i 個
      // 原本是 n - 1，會再加上 - i 是因為最後 i 個元素已經排好了
      // 所以沒必要跟那些排好的元素比較
      swapped = false;
      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          swapped = true;
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }

  window.addEventListener('load', function() {
    const insertionSort = (arr) => {
      const n = arr.length;
      
      // 假設第一個元素已經排好，所以從 1 開始跑
      for (let i = 1; i < n; i++) {
      
        // position 表示可以插入的位置
        let position = i;
      
        // 先把要插入的元素存起來
        const value = arr[i];
      
        // 開始往前找，只要符合這條件就代表這個位置是可以插入的
        // 邊找的時候就可以邊把元素往後挪，騰出空間
        while (i >= 0 && arr[position - 1] > value) {
          [arr[position], arr[position - 1]] = [arr[position - 1], arr[position]];
          position--;
        }
      
        // 找到適合的位置，放入元素
        arr[position] = value;
      }
      return arr;
    }

    const simpleMergeSort = (arr) => {
  
      // 合併
      const merge = (leftArray, rightArray) => {
        let result = [];
        let nowIndex = 0, left = 0, right = 0;
        const leftLength = leftArray.length;
        const rightLength = rightArray.length;
      
        // 如果左右兩邊都沒抓完，就看誰比較小抓誰
        while (left < leftLength && right < rightLength) {
          if (leftArray[left] < rightArray[right]) {
            result[nowIndex++] = leftArray[left++];
          } else {
            result[nowIndex++] = rightArray[right++];
          }
        }
      
        // 跑到這裡代表左右兩邊其中一邊抓完了
        // 如果是左邊沒抓完，全部抓下來
        while (left < leftLength) {
          result[nowIndex++] = leftArray[left++];
        }
      
        // 右邊沒抓完，全部抓下來
        while (right < rightLength) {
          result[nowIndex++] = rightArray[right++];
        }
      
        // 把合併好的陣列直接傳回去
        return result;
      }
      const _mergeSort = (arr) => {
        const length = arr.length;
        if (length <= 1) return arr;
      
        // 切兩半
        const middle = Math.floor(length / 2);
      
        // 排左邊
        const leftArray = _mergeSort(arr.slice(0, middle));
      
        // 排右邊
        const rightArray = _mergeSort(arr.slice(middle, length));
      
        // 合併後丟回去
        return merge(leftArray, rightArray);
      }
      return _mergeSort(arr);
    }
  })

    window.addEventListener("hashchange", function (event) {
      event.preventDefault();
      const url = location.hash.substr(1);
      const target = document.querySelector(`.${url}`).offsetTop - 60;
      window.scrollTo({
        top: target,
        left: 0,
        behavior: 'smooth' // => 滑動效果
      });
      function heapSort (arr) {  
        function heapify(arr, length, node) {
          const left = node * 2 + 1;
          const right = node * 2 + 2;
        
          // 先預設最大的節點是自己
          let max = node;
        
          if (left < length && arr[left] > arr[max]) {
            max = left;
          }
        
          if (right < length && arr[right] > arr[max]) {
            max = right;
          }
        
          // 如果左右兩邊有任何一個比 node 大的話
          if (max !== node) {
            // 就把兩個互換
            [arr[node], arr[max]] = [arr[max], arr[node]];
        
            // 接著繼續 heapfiy
            heapify(arr, length, max);
          }
        }
        
        // build max heap
        const length = arr.length;
        for (let i = Math.floor(length / 2) - 1; i>=0; i--) {
          heapify(arr, length, i);
        }
        
        // 排序
        for (let i = length - 1; i > 0; i--) {
          [arr[0], arr[i]] = [arr[i], arr[0]];
          heapify(arr, i, 0);
        }
        return arr;
      }
  });
  
  
  /*
  nav 縮小
  from: https://benmarshall.me/attaching-javascript-handlers-to-scroll-events/
  */
  document.addEventListener('wheel', () => {
    if (window.scrollY > 50) {
      document.querySelector('.nav').classList.add('nav-scrolled')
    } else {
      document.querySelector('.nav').classList.remove('nav-scrolled')
    }
  }, {capture: false, passive: true })

  function run() {
    function quickSort (arr) {
      const swap = (array, i , j) => {
        [array[i], array[j]] = [array[j], array[i]];
      }
      const partition = (array, start, end) => {
        let splitIndex = start + 1;
        for (let i = start + 1; i <= end; i++) {
          if (array[i] < array[start]) {
            swap(array, i, splitIndex);
            splitIndex++;
          }
        }
      
        // 記得把 pivot 跟最後一個比它小的元素互換
        swap(array, start, splitIndex - 1);
        return splitIndex - 1;
      }
      const _quickSort = (array, start, end) => {
        if (start >= end) return array;
      
        // 在 partition 裡面調整數列，並且回傳 pivot 的 index
        const middle = partition(array, start, end);
        _quickSort(array, start, middle - 1);
        _quickSort(array, middle + 1, end);
        return array;
      };
      return _quickSort(arr, 0, arr.length - 1);
    }

  }
});

