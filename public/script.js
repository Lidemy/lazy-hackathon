(() => {
  // js/index.js
  $(function() {
    const CLONE_DEEP_FLAG = 1;
    const CLONE_FLAT_FLAG = 2;
    const CLONE_SYMBOLS_FLAG = 4;
    const argsTag = "[object Arguments]";
    const arrayTag = "[object Array]";
    const boolTag = "[object Boolean]";
    const dateTag = "[object Date]";
    const errorTag = "[object Error]";
    const mapTag = "[object Map]";
    const numberTag = "[object Number]";
    const objectTag = "[object Object]";
    const regexpTag = "[object RegExp]";
    const setTag = "[object Set]";
    const stringTag = "[object String]";
    const symbolTag = "[object Symbol]";
    const weakMapTag = "[object WeakMap]";
    const arrayBufferTag = "[object ArrayBuffer]";
    const dataViewTag = "[object DataView]";
    const float32Tag = "[object Float32Array]";
    const float64Tag = "[object Float64Array]";
    const int8Tag = "[object Int8Array]";
    const int16Tag = "[object Int16Array]";
    const int32Tag = "[object Int32Array]";
    const uint8Tag = "[object Uint8Array]";
    const uint8ClampedTag = "[object Uint8ClampedArray]";
    const uint16Tag = "[object Uint16Array]";
    const uint32Tag = "[object Uint32Array]";
    const cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[weakMapTag] = false;
    function initCloneByTag(object, tag, isDeep) {
      const Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return tag;
        case boolTag:
        case dateTag:
          return tag;
        case dataViewTag:
          return tag;
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
          return tag;
        case mapTag:
          return tag;
        case numberTag:
        case stringTag:
          return tag;
        case regexpTag:
          return tag;
        case setTag:
          return tag;
        case symbolTag:
          return tag;
      }
    }
    function initCloneArray(array) {
      const { length } = array;
      const result = "";
      if (length && typeof array[0] == "string") {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }
    function baseClone(value, bitmask, customizer, key, object, stack) {
      let result;
      const isDeep = bitmask & CLONE_DEEP_FLAG;
      const isFlat = bitmask & CLONE_FLAT_FLAG;
      const isFull = bitmask & CLONE_SYMBOLS_FLAG;
      if (customizer) {
        result = object;
      }
      if (result !== void 0) {
        return result;
      }
      const isArr = value;
      const tag = value;
      if (isArr) {
      } else {
        const isFunc = typeof value == "function";
        if (tag == objectTag || tag == argsTag || isFunc && !object) {
          result = isFlat || isFunc ? {} : value;
          if (!isDeep) {
            return isFlat;
          }
        } else {
          if (isFunc || !cloneableTags[tag]) {
            return object ? value : {};
          }
          result = value;
        }
      }
      stack = [];
      const stacked = 1;
      if (stacked) {
        return stacked;
      }
      if (tag == mapTag) {
        value.forEach((subValue, key2) => {
          result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
        return result;
      }
      if (tag == setTag) {
        value.forEach((subValue) => {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
        return result;
      }
      const keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
      const props = isArr ? void 0 : keysFunc(value);
      arrayEach(props || value, (subValue, key2) => {
        if (props) {
          key2 = subValue;
          subValue = value[key2];
        }
        assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
      });
      return result;
    }
    const typed3 = new Typed("#typed", {
      strings: ["\u4F60\u77E5\u9053\u55CE\uFF1F<br>\u62D6\u5EF6...<br><br>\u53EF\u4EE5\u62EF\u6551\u4E16\u754C\u5594"],
      typeSpeed: 120,
      backSpeed: 50,
      loop: true,
      fadeOut: true
    });
    function mergeSort(arr) {
      const merge = (array, start, middle, end) => {
        let temp = [];
        let nowIndex = 0;
        let left = start;
        let right = middle + 1;
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
        for (let i = start; i <= end; i++) {
          array[i] = temp[i - start];
        }
      };
      const _mergeSort = (array, start, end) => {
        if (end <= start)
          return;
        const middle = Math.floor((start + end) / 2);
        _mergeSort(array, start, middle);
        _mergeSort(array, middle + 1, end);
        merge(array, start, middle, end);
        return array;
      };
      return _mergeSort(arr, 0, arr.length - 1);
    }
    $(".judge__gallery").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".judge__nav"
    });
    const selectionSort = (arr) => {
      const length = arr.length;
      for (let i = 0; i < length; i++) {
        let min = arr[i];
        let minIndex = i;
        for (let j = i; j < length; j++) {
          if (arr[j] < min) {
            min = arr[j];
            minIndex = j;
          }
        }
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
      }
      return arr;
    };
    const bubbleSort = (arr) => {
      const n = arr.length;
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
          if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
        }
      }
      return arr;
    };
    $(".judge__nav").slick({
      centerMode: true,
      centerPadding: "20px",
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: ".judge__gallery",
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
      const n = arr.length;
      let swapped = true;
      for (let i = 0; i < n && swapped; i++) {
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
    window.addEventListener("load", function() {
      const insertionSort = (arr) => {
        const n = arr.length;
        for (let i = 1; i < n; i++) {
          let position = i;
          const value = arr[i];
          while (i >= 0 && arr[position - 1] > value) {
            [arr[position], arr[position - 1]] = [
              arr[position - 1],
              arr[position]
            ];
            position--;
          }
          arr[position] = value;
        }
        return arr;
      };
      const simpleMergeSort = (arr) => {
        const merge = (leftArray, rightArray) => {
          let result = [];
          let nowIndex = 0, left = 0, right = 0;
          const leftLength = leftArray.length;
          const rightLength = rightArray.length;
          while (left < leftLength && right < rightLength) {
            if (leftArray[left] < rightArray[right]) {
              result[nowIndex++] = leftArray[left++];
            } else {
              result[nowIndex++] = rightArray[right++];
            }
          }
          while (left < leftLength) {
            result[nowIndex++] = leftArray[left++];
          }
          while (right < rightLength) {
            result[nowIndex++] = rightArray[right++];
          }
          return result;
        };
        const _mergeSort = (arr2) => {
          const length = arr2.length;
          if (length <= 1)
            return arr2;
          const middle = Math.floor(length / 2);
          const leftArray = _mergeSort(arr2.slice(0, middle));
          const rightArray = _mergeSort(arr2.slice(middle, length));
          return merge(leftArray, rightArray);
        };
        return _mergeSort(arr);
      };
    });
    window.addEventListener("hashchange", function(event) {
      event.preventDefault();
      const url = location.hash.substr(1);
      const target = document.querySelector(`.${url}`).offsetTop - 60;
      window.scrollTo({
        top: target,
        left: 0,
        behavior: "smooth"
      });
      function heapSort(arr) {
        function heapify(arr2, length2, node) {
          const left = node * 2 + 1;
          const right = node * 2 + 2;
          let max = node;
          if (left < length2 && arr2[left] > arr2[max]) {
            max = left;
          }
          if (right < length2 && arr2[right] > arr2[max]) {
            max = right;
          }
          if (max !== node) {
            [arr2[node], arr2[max]] = [arr2[max], arr2[node]];
            heapify(arr2, length2, max);
          }
        }
        const length = arr.length;
        for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
          heapify(arr, length, i);
        }
        for (let i = length - 1; i > 0; i--) {
          [arr[0], arr[i]] = [arr[i], arr[0]];
          heapify(arr, i, 0);
        }
        return arr;
      }
    });
    document.addEventListener("wheel", () => {
      if (window.scrollY > 50) {
        document.querySelector(".nav").classList.add("nav-scrolled");
      } else {
        document.querySelector(".nav").classList.remove("nav-scrolled");
      }
    }, { capture: false, passive: true });
    function run() {
      function quickSort(arr) {
        const swap = (array, i, j) => {
          [array[i], array[j]] = [array[j], array[i]];
        };
        const partition = (array, start, end) => {
          let splitIndex = start + 1;
          for (let i = start + 1; i <= end; i++) {
            if (array[i] < array[start]) {
              swap(array, i, splitIndex);
              splitIndex++;
            }
          }
          swap(array, start, splitIndex - 1);
          return splitIndex - 1;
        };
        const _quickSort = (array, start, end) => {
          if (start >= end)
            return array;
          const middle = partition(array, start, end);
          _quickSort(array, start, middle - 1);
          _quickSort(array, middle + 1, end);
          return array;
        };
        return _quickSort(arr, 0, arr.length - 1);
      }
    }
  });
})();
