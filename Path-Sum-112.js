/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
 
 //Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
 
var hasPathSum = function(root, targetSum) {
    //set res to false
    let res = false
    
    //helper function initializaton
    function helper(node, currentSum) {
        // if no node or res is true then exit helper function
        if (!node || res) {
            return
        }
        // add to node value to currentSum
        currentSum += node.val
        // if reach leaf and currentSum equals targetSum return true
        if(!node.left && !node.right && currentSum === targetSum) {
            res = true;
        }
     //traverse left and right nodes
    helper(node.left, currentSum);
    helper(node.right, currentSum);
    }
    //call helper function pass in root and initial currentSum value of 0
    helper(root, 0)
    //return true or false
    return res
};
