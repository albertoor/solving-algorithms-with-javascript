/*

    For this exercise you will be strengthening your page-fu mastery. You will complete the
    PaginationHelper class, which is a utility class helpful for querying paging information
    related to an array.

    The class is designed to take in an array of values and an integer indicating how many
    items will be allowed per each page. The types of values contained within the collection/array
    are not relevant.

    The following are some examples of how this class is used:

    var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
    helper.pageCount(); //should == 2
    helper.itemCount(); //should == 6
    helper.pageItemCount(0); //should == 4
    helper.pageItemCount(1); // last page - should == 2
    helper.pageItemCount(2); // should == -1 since the page is invalid

    // pageIndex takes an item index and returns the page that it belongs on
    helper.pageIndex(5); //should == 1 (zero based index)
    helper.pageIndex(2); //should == 0
    helper.pageIndex(20); //should == -1
    helper.pageIndex(-10); //should == -1
 */

// TODO: Complete this object/class

/**
 * The constructor takes in an array of items and a integer indicating
 * how many items fit within a single page
 */

// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

// returns the number of pages
PaginationHelper.prototype.itemCount = function () {
  return this.collection.length;
};

// returns the number of items within the entire collection
PaginationHelper.prototype.pageCount = function () {
  return Math.ceil(this.itemCount() / this.itemsPerPage);
};

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  if (pageIndex >= this.pageCount()) return -1;

  return this.collection
    .slice(pageIndex * this.itemsPerPage, this.itemCount())
    .splice(0, this.itemsPerPage).length;
};

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
  if (this.itemCount() === 0 || itemIndex < 0 || itemIndex > this.itemCount())
    return -1;
  if (itemIndex === 0 || itemIndex / this.itemsPerPage === 1) return 0;
  return Math.floor(itemIndex / this.itemsPerPage);
};

let pagination = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);

console.log(pagination.pageCount()); // returns 2
console.log(pagination.itemCount()); // returns 6
console.log(pagination.pageItemCount(0)); // returns 4
console.log(pagination.pageItemCount(1)); // returns 2
console.log(pagination.pageItemCount(2)); // returns -1
console.log(pagination.pageIndex(5)); // returns 1
console.log(pagination.pageIndex(2)); // returns 0
console.log(pagination.pageIndex(6)); // returns 0
console.log(pagination.pageIndex(20)); // returns -1
console.log(pagination.pageIndex(-10)); // returns -1
