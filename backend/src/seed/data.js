import {v4 as uuid} from "uuid"
export const seedSheets = [
    {
        "name": "Codemate's SDE Sheet 1",
        "problems": [
            { "problem_statement": "Two Sum", "link": "https://leetcode.com/problems/two-sum/", "completed": "false" },
            { "problem_statement": "Valid Parentheses", "link": "https://leetcode.com/problems/valid-parentheses/", "completed": "false" },
            { "problem_statement": "Merge Two Sorted Lists", "link": "https://leetcode.com/problems/merge-two-sorted-lists/", "completed": "false" },
            { "problem_statement": "Binary Search", "link": "https://leetcode.com/problems/binary-search/", "completed": "false" },
            { "problem_statement": "Remove Duplicates from Sorted Array", "link": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/", "completed": "false" },
            { "problem_statement": "Maximum Subarray", "link": "https://leetcode.com/problems/maximum-subarray/", "completed": "false" },
            { "problem_statement": "Rotate Array", "link": "https://leetcode.com/problems/rotate-array/", "completed": "false" },
            { "problem_statement": "Longest Substring Without Repeating Characters", "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters/", "completed": "false" },
            { "problem_statement": "Find Pivot Index", "link": "https://leetcode.com/problems/find-pivot-index/", "completed": "false" },
            { "problem_statement": "Intersection of Two Arrays", "link": "https://leetcode.com/problems/intersection-of-two-arrays/", "completed": "false" },
            { "problem_statement": "Majority Element", "link": "https://leetcode.com/problems/majority-element/", "completed": "false" },
            { "problem_statement": "Contains Duplicate", "link": "https://leetcode.com/problems/contains-duplicate/", "completed": "false" },
            { "problem_statement": "Best Time to Buy and Sell Stock", "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", "completed": "false" },
            { "problem_statement": "Move Zeroes", "link": "https://leetcode.com/problems/move-zeroes/", "completed": "false" },
            { "problem_statement": "Product of Array Except Self", "link": "https://leetcode.com/problems/product-of-array-except-self/", "completed": "false" },
            { "problem_statement": "Minimum Size Subarray Sum", "link": "https://leetcode.com/problems/minimum-size-subarray-sum/", "completed": "false" },
            { "problem_statement": "Subarray Sum Equals K", "link": "https://leetcode.com/problems/subarray-sum-equals-k/", "completed": "false" },
            { "problem_statement": "Sliding Window Maximum", "link": "https://leetcode.com/problems/sliding-window-maximum/", "completed": "false" },
            { "problem_statement": "Spiral Matrix", "link": "https://leetcode.com/problems/spiral-matrix/", "completed": "false" },
            { "problem_statement": "Search a 2D Matrix", "link": "https://leetcode.com/problems/search-a-2d-matrix/", "completed": "false" },
            { "problem_statement": "Sort Colors", "link": "https://leetcode.com/problems/sort-colors/", "completed": "false" },
            { "problem_statement": "Set Matrix Zeroes", "link": "https://leetcode.com/problems/set-matrix-zeroes/", "completed": "false" },
            { "problem_statement": "Rotate Image", "link": "https://leetcode.com/problems/rotate-image/", "completed": "false" },
            { "problem_statement": "Spiral Matrix II", "link": "https://leetcode.com/problems/spiral-matrix-ii/", "completed": "false" },
            { "problem_statement": "Pascal's Triangle", "link": "https://leetcode.com/problems/pascals-triangle/", "completed": "false" },
            { "problem_statement": "Next Permutation", "link": "https://leetcode.com/problems/next-permutation/", "completed": "false" },
            { "problem_statement": "Trapping Rain Water", "link": "https://leetcode.com/problems/trapping-rain-water/", "completed": "false" },
            { "problem_statement": "Jump Game", "link": "https://leetcode.com/problems/jump-game/", "completed": "false" },
            { "problem_statement": "Merge Intervals", "link": "https://leetcode.com/problems/merge-intervals/", "completed": "false" },
            { "problem_statement": "Insert Interval", "link": "https://leetcode.com/problems/insert-interval/", "completed": "false" },
            { "problem_statement": "Interval List Intersections", "link": "https://leetcode.com/problems/interval-list-intersections/", "completed": "false" },
            { "problem_statement": "Missing Number", "link": "https://leetcode.com/problems/missing-number/", "completed": "false" },
            { "problem_statement": "Single Number", "link": "https://leetcode.com/problems/single-number/", "completed": "false" },
            { "problem_statement": "Find the Duplicate Number", "link": "https://leetcode.com/problems/find-the-duplicate-number/", "completed": "false" },
            { "problem_statement": "Longest Consecutive Sequence", "link": "https://leetcode.com/problems/longest-consecutive-sequence/", "completed": "false" },
            { "problem_statement": "Maximum Product Subarray", "link": "https://leetcode.com/problems/maximum-product-subarray/", "completed": "false" },
            { "problem_statement": "Subsets", "link": "https://leetcode.com/problems/subsets/", "completed": "false" },
            { "problem_statement": "Combination Sum", "link": "https://leetcode.com/problems/combination-sum/", "completed": "false" },
            { "problem_statement": "Permutations", "link": "https://leetcode.com/problems/permutations/", "completed": "false" },
            { "problem_statement": "Permutations II", "link": "https://leetcode.com/problems/permutations-ii/", "completed": "false" },
            { "problem_statement": "N-Queens", "link": "https://leetcode.com/problems/n-queens/", "completed": "false" },
            { "problem_statement": "Rotate List", "link": "https://leetcode.com/problems/rotate-list/", "completed": "false" },
            { "problem_statement": "Reverse Linked List", "link": "https://leetcode.com/problems/reverse-linked-list/", "completed": "false" },
            { "problem_statement": "Linked List Cycle", "link": "https://leetcode.com/problems/linked-list-cycle/", "completed": "false" },
            { "problem_statement": "Remove Nth Node From End of List", "link": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", "completed": "false" },
            { "problem_statement": "Add Two Numbers", "link": "https://leetcode.com/problems/add-two-numbers/", "completed": "false" },
            { "problem_statement": "Merge Two Sorted Lists", "link": "https://leetcode.com/problems/merge-two-sorted-lists/", "completed": "false" },
            { "problem_statement": "Intersection of Two Linked Lists", "link": "https://leetcode.com/problems/intersection-of-two-linked-lists/", "completed": "false" },
            { "problem_statement": "Remove Linked List Elements", "link": "https://leetcode.com/problems/remove-linked-list-elements/", "completed": "false" },
            { "problem_statement": "Palindrome Linked List", "link": "https://leetcode.com/problems/palindrome-linked-list/", "completed": "false" },
            { "problem_statement": "Flatten a Multilevel Doubly Linked List", "link": "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/", "completed": "false" },
            { "problem_statement": "Copy List with Random Pointer", "link": "https://leetcode.com/problems/copy-list-with-random-pointer/", "completed": "false" },
            { "problem_statement": "LRU Cache", "link": "https://leetcode.com/problems/lru-cache/", "completed": "false" },
            { "problem_statement": "Remove Duplicates from Sorted List", "link": "https://leetcode.com/problems/remove-duplicates-from-sorted-list/", "completed": "false" },
            { "problem_statement": "Reverse Nodes in k-Group", "link": "https://leetcode.com/problems/reverse-nodes-in-k-group/", "completed": "false" },
            { "problem_statement": "Flatten Binary Tree to Linked List", "link": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/", "completed": "false" },
            { "problem_statement": "Binary Tree Preorder Traversal", "link": "https://leetcode.com/problems/binary-tree-preorder-traversal/", "completed": "false" },
            { "problem_statement": "Binary Tree Inorder Traversal", "link": "https://leetcode.com/problems/binary-tree-inorder-traversal/", "completed": "false" },
            { "problem_statement": "Binary Tree Postorder Traversal", "link": "https://leetcode.com/problems/binary-tree-postorder-traversal/", "completed": "false" },
            { "problem_statement": "Maximum Depth of Binary Tree", "link": "https://leetcode.com/problems/maximum-depth-of-binary-tree/", "completed": "false" },
            { "problem_statement": "Invert Binary Tree", "link": "https://leetcode.com/problems/invert-binary-tree/", "completed": "false" },
            { "problem_statement": "Symmetric Tree", "link": "https://leetcode.com/problems/symmetric-tree/", "completed": "false" },
            { "problem_statement": "Path Sum", "link": "https://leetcode.com/problems/path-sum/", "completed": "false" },
            { "problem_statement": "Sum Root to Leaf Numbers", "link": "https://leetcode.com/problems/sum-root-to-leaf-numbers/", "completed": "false" },
            { "problem_statement": "Construct Binary Tree from Preorder and Inorder Traversal", "link": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/", "completed": "false" },
            { "problem_statement": "Construct Binary Tree from Inorder and Postorder Traversal", "link": "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/", "completed": "false" },
            { "problem_statement": "Populating Next Right Pointers in Each Node", "link": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/", "completed": "false" },
            { "problem_statement": "Sum of Left Leaves", "link": "https://leetcode.com/problems/sum-of-left-leaves/", "completed": "false" },
            { "problem_statement": "Same Tree", "link": "https://leetcode.com/problems/same-tree/", "completed": "false" },
            { "problem_statement": "Subtree of Another Tree", "link": "https://leetcode.com/problems/subtree-of-another-tree/", "completed": "false" },
            { "problem_statement": "Binary Tree Level Order Traversal", "link": "https://leetcode.com/problems/binary-tree-level-order-traversal/", "completed": "false" },
            { "problem_statement": "Binary Tree Right Side View", "link": "https://leetcode.com/problems/binary-tree-right-side-view/", "completed": "false" },
            { "problem_statement": "Lowest Common Ancestor of a Binary Tree", "link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", "completed": "false" },
            { "problem_statement": "Kth Smallest Element in a BST", "link": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", "completed": "false" },
            { "problem_statement": "Validate Binary Search Tree", "link": "https://leetcode.com/problems/validate-binary-search-tree/", "completed": "false" },
            { "problem_statement": "Recover Binary Search Tree", "link": "https://leetcode.com/problems/recover-binary-search-tree/", "completed": "false" },
            { "problem_statement": "Serialize and Deserialize Binary Tree", "link": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", "completed": "false" },
            { "problem_statement": "Convert Sorted Array to Binary Search Tree", "link": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/", "completed": "false" },
            { "problem_statement": "Balanced Binary Tree", "link": "https://leetcode.com/problems/balanced-binary-tree/", "completed": "false" },
            { "problem_statement": "Binary Tree Maximum Path Sum", "link": "https://leetcode.com/problems/binary-tree-maximum-path-sum/", "completed": "false" },
            { "problem_statement": "Diameter of Binary Tree", "link": "https://leetcode.com/problems/diameter-of-binary-tree/", "completed": "false" },
            { "problem_statement": "Count Complete Tree Nodes", "link": "https://leetcode.com/problems/count-complete-tree-nodes/", "completed": "false" },
            { "problem_statement": "Binary Tree Zigzag Level Order Traversal", "link": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/", "completed": "false" },
            { "problem_statement": "Implement Queue using Stacks", "link": "https://leetcode.com/problems/implement-queue-using-stacks/", "completed": "false" },
            { "problem_statement": "Implement Stack using Queues", "link": "https://leetcode.com/problems/implement-stack-using-queues/", "completed": "false" },
            { "problem_statement": "Decode String", "link": "https://leetcode.com/problems/decode-string/", "completed": "false" },
            { "problem_statement": "Evaluate Reverse Polish Notation", "link": "https://leetcode.com/problems/evaluate-reverse-polish-notation/", "completed": "false" },
            { "problem_statement": "Design Circular Queue", "link": "https://leetcode.com/problems/design-circular-queue/", "completed": "false" },
            { "problem_statement": "Design Circular Deque", "link": "https://leetcode.com/problems/design-circular-deque/", "completed": "false" },
        ]
    },    {
        "name": "Codemate's SDE Sheet 2",
        "problems": [
            { "problem_statement": "Two Sum", "link": "https://leetcode.com/problems/two-sum/", "completed": "false" },
            { "problem_statement": "Valid Parentheses", "link": "https://leetcode.com/problems/valid-parentheses/", "completed": "false" },
            { "problem_statement": "Merge Intervals", "link": "https://leetcode.com/problems/merge-intervals/", "completed": "false" },
            { "problem_statement": "Search in Rotated Sorted Array", "link": "https://leetcode.com/problems/search-in-rotated-sorted-array/", "completed": "false" },
            { "problem_statement": "Move Zeroes", "link": "https://leetcode.com/problems/move-zeroes/", "completed": "false" },
            { "problem_statement": "Longest Substring Without Repeating Characters", "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters/", "completed": "false" },
            { "problem_statement": "LRU Cache", "link": "https://leetcode.com/problems/lru-cache/", "completed": "false" },
            { "problem_statement": "3Sum", "link": "https://leetcode.com/problems/3sum/", "completed": "false" },
            { "problem_statement": "Container With Most Water", "link": "https://leetcode.com/problems/container-with-most-water/", "completed": "false" },
            { "problem_statement": "Binary Search", "link": "https://leetcode.com/problems/binary-search/", "completed": "false" },
            { "problem_statement": "Top K Frequent Elements", "link": "https://leetcode.com/problems/top-k-frequent-elements/", "completed": "false" },
            { "problem_statement": "First Missing Positive", "link": "https://leetcode.com/problems/first-missing-positive/", "completed": "false" },
            { "problem_statement": "Product of Array Except Self", "link": "https://leetcode.com/problems/product-of-array-except-self/", "completed": "false" },
            { "problem_statement": "Subarray Sum Equals K", "link": "https://leetcode.com/problems/subarray-sum-equals-k/", "completed": "false" },
            { "problem_statement": "Group Anagrams", "link": "https://leetcode.com/problems/group-anagrams/", "completed": "false" },
            { "problem_statement": "Best Time to Buy and Sell Stock", "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", "completed": "false" },
            { "problem_statement": "Minimum Window Substring", "link": "https://leetcode.com/problems/minimum-window-substring/", "completed": "false" },
            { "problem_statement": "Word Ladder", "link": "https://leetcode.com/problems/word-ladder/", "completed": "false" },
            { "problem_statement": "Merge k Sorted Lists", "link": "https://leetcode.com/problems/merge-k-sorted-lists/", "completed": "false" },
            { "problem_statement": "Find Median from Data Stream", "link": "https://leetcode.com/problems/find-median-from-data-stream/", "completed": "false" },
            { "problem_statement": "Decode Ways", "link": "https://leetcode.com/problems/decode-ways/", "completed": "false" },
            { "problem_statement": "Unique Paths", "link": "https://leetcode.com/problems/unique-paths/", "completed": "false" },
            { "problem_statement": "Climbing Stairs", "link": "https://leetcode.com/problems/climbing-stairs/", "completed": "false" },
            { "problem_statement": "Coin Change", "link": "https://leetcode.com/problems/coin-change/", "completed": "false" },
            { "problem_statement": "Maximum Subarray", "link": "https://leetcode.com/problems/maximum-subarray/", "completed": "false" },
            { "problem_statement": "Longest Increasing Subsequence", "link": "https://leetcode.com/problems/longest-increasing-subsequence/", "completed": "false" },
            { "problem_statement": "Edit Distance", "link": "https://leetcode.com/problems/edit-distance/", "completed": "false" },
            { "problem_statement": "Sort Colors", "link": "https://leetcode.com/problems/sort-colors/", "completed": "false" },
            { "problem_statement": "Rotate Image", "link": "https://leetcode.com/problems/rotate-image/", "completed": "false" },
            { "problem_statement": "Set Matrix Zeroes", "link": "https://leetcode.com/problems/set-matrix-zeroes/", "completed": "false" },
            { "problem_statement": "Spiral Matrix", "link": "https://leetcode.com/problems/spiral-matrix/", "completed": "false" },
            { "problem_statement": "Jump Game", "link": "https://leetcode.com/problems/jump-game/", "completed": "false" },
            { "problem_statement": "Trapping Rain Water", "link": "https://leetcode.com/problems/trapping-rain-water/", "completed": "false" },
            { "problem_statement": "Find the Duplicate Number", "link": "https://leetcode.com/problems/find-the-duplicate-number/", "completed": "false" },
            { "problem_statement": "Longest Consecutive Sequence", "link": "https://leetcode.com/problems/longest-consecutive-sequence/", "completed": "false" },
            { "problem_statement": "Missing Number", "link": "https://leetcode.com/problems/missing-number/", "completed": "false" },
            { "problem_statement": "Single Number", "link": "https://leetcode.com/problems/single-number/", "completed": "false" },
            { "problem_statement": "Number of Islands", "link": "https://leetcode.com/problems/number-of-islands/", "completed": "false" },
            { "problem_statement": "Clone Graph", "link": "https://leetcode.com/problems/clone-graph/", "completed": "false" },
            { "problem_statement": "Course Schedule", "link": "https://leetcode.com/problems/course-schedule/", "completed": "false" },
            { "problem_statement": "Implement Trie", "link": "https://leetcode.com/problems/implement-trie-prefix-tree/", "completed": "false" },
            { "problem_statement": "Word Break", "link": "https://leetcode.com/problems/word-break/", "completed": "false" },
            { "problem_statement": "Find Minimum in Rotated Sorted Array", "link": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", "completed": "false" },
            { "problem_statement": "Minimum Path Sum", "link": "https://leetcode.com/problems/minimum-path-sum/", "completed": "false" },
            { "problem_statement": "Binary Tree Inorder Traversal", "link": "https://leetcode.com/problems/binary-tree-inorder-traversal/", "completed": "false" },
            { "problem_statement": "Binary Tree Preorder Traversal", "link": "https://leetcode.com/problems/binary-tree-preorder-traversal/", "completed": "false" },
            { "problem_statement": "Binary Tree Postorder Traversal", "link": "https://leetcode.com/problems/binary-tree-postorder-traversal/", "completed": "false" },
            { "problem_statement": "Lowest Common Ancestor of a Binary Tree", "link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", "completed": "false" },
            { "problem_statement": "Kth Smallest Element in a BST", "link": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", "completed": "false" },
            { "problem_statement": "Validate Binary Search Tree", "link": "https://leetcode.com/problems/validate-binary-search-tree/", "completed": "false" },
            { "problem_statement": "Recover Binary Search Tree", "link": "https://leetcode.com/problems/recover-binary-search-tree/", "completed": "false" },
            { "problem_statement": "Serialize and Deserialize Binary Tree", "link": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", "completed": "false" },
            { "problem_statement": "Convert Sorted Array to Binary Search Tree", "link": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/", "completed": "false" },
            { "problem_statement": "Balanced Binary Tree", "link": "https://leetcode.com/problems/balanced-binary-tree/", "completed": "false" },
            { "problem_statement": "Binary Tree Maximum Path Sum", "link": "https://leetcode.com/problems/binary-tree-maximum-path-sum/", "completed": "false" },
            { "problem_statement": "Diameter of Binary Tree", "link": "https://leetcode.com/problems/diameter-of-binary-tree/", "completed": "false" },
            { "problem_statement": "Count Complete Tree Nodes", "link": "https://leetcode.com/problems/count-complete-tree-nodes/", "completed": "false" },
            { "problem_statement": "Binary Tree Zigzag Level Order Traversal", "link": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/", "completed": "false" },
            { "problem_statement": "Spiral Matrix II", "link": "https://leetcode.com/problems/spiral-matrix-ii/", "completed": "false" },
            { "problem_statement": "Add Two Numbers", "link": "https://leetcode.com/problems/add-two-numbers/", "completed": "false" },
            { "problem_statement": "Reverse Linked List", "link": "https://leetcode.com/problems/reverse-linked-list/", "completed": "false" },
            { "problem_statement": "Linked List Cycle", "link": "https://leetcode.com/problems/linked-list-cycle/", "completed": "false" },
            { "problem_statement": "Remove Nth Node From End of List", "link": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", "completed": "false" },
            { "problem_statement": "Intersection of Two Linked Lists", "link": "https://leetcode.com/problems/intersection-of-two-linked-lists/", "completed": "false" },
            { "problem_statement": "Remove Linked List Elements", "link": "https://leetcode.com/problems/remove-linked-list-elements/", "completed": "false" },
            { "problem_statement": "Palindrome Linked List", "link": "https://leetcode.com/problems/palindrome-linked-list/", "completed": "false" },
            { "problem_statement": "Copy List with Random Pointer", "link": "https://leetcode.com/problems/copy-list-with-random-pointer/", "completed": "false" },
            { "problem_statement": "Flatten a Multilevel Doubly Linked List", "link": "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/", "completed": "false" },
            { "problem_statement": "Reverse Nodes in k-Group", "link": "https://leetcode.com/problems/reverse-nodes-in-k-group/", "completed": "false" },
            { "problem_statement": "Populating Next Right Pointers in Each Node", "link": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/", "completed": "false" },
            { "problem_statement": "Design Circular Queue", "link": "https://leetcode.com/problems/design-circular-queue/", "completed": "false" },
            { "problem_statement": "Design Circular Deque", "link": "https://leetcode.com/problems/design-circular-deque/", "completed": "false" },
            { "problem_statement": "Evaluate Reverse Polish Notation", "link": "https://leetcode.com/problems/evaluate-reverse-polish-notation/", "completed": "false" },
            { "problem_statement": "Decode String", "link": "https://leetcode.com/problems/decode-string/", "completed": "false" },
            { "problem_statement": "Subsets", "link": "https://leetcode.com/problems/subsets/", "completed": "false" },
            { "problem_statement": "Combination Sum", "link": "https://leetcode.com/problems/combination-sum/", "completed": "false" },
            { "problem_statement": "Permutations", "link": "https://leetcode.com/problems/permutations/", "completed": "false" },
            { "problem_statement": "Permutations II", "link": "https://leetcode.com/problems/permutations-ii/", "completed": "false" },
            { "problem_statement": "N-Queens", "link": "https://leetcode.com/problems/n-queens/", "completed": "false" },
        ]
    },
        {
        "name": "Codemate's SDE Sheet 3",
        "problems": [
            { "problem_statement": "Two Sum", "link": "https://leetcode.com/problems/two-sum/", "completed": "false" },
            { "problem_statement": "Add Two Numbers", "link": "https://leetcode.com/problems/add-two-numbers/", "completed": "false" },
            { "problem_statement": "Longest Substring Without Repeating Characters", "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters/", "completed": "false" },
            { "problem_statement": "Median of Two Sorted Arrays", "link": "https://leetcode.com/problems/median-of-two-sorted-arrays/", "completed": "false" },
            { "problem_statement": "Valid Parentheses", "link": "https://leetcode.com/problems/valid-parentheses/", "completed": "false" },
            { "problem_statement": "Merge Two Sorted Lists", "link": "https://leetcode.com/problems/merge-two-sorted-lists/", "completed": "false" },
            { "problem_statement": "Search in Rotated Sorted Array", "link": "https://leetcode.com/problems/search-in-rotated-sorted-array/", "completed": "false" },
            { "problem_statement": "Product of Array Except Self", "link": "https://leetcode.com/problems/product-of-array-except-self/", "completed": "false" },
            { "problem_statement": "Maximum Subarray", "link": "https://leetcode.com/problems/maximum-subarray/", "completed": "false" },
            { "problem_statement": "Best Time to Buy and Sell Stock", "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", "completed": "false" },
            { "problem_statement": "Subarray Sum Equals K", "link": "https://leetcode.com/problems/subarray-sum-equals-k/", "completed": "false" },
            { "problem_statement": "Contains Duplicate", "link": "https://leetcode.com/problems/contains-duplicate/", "completed": "false" },
            { "problem_statement": "Find Minimum in Rotated Sorted Array", "link": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", "completed": "false" },
            { "problem_statement": "Minimum Size Subarray Sum", "link": "https://leetcode.com/problems/minimum-size-subarray-sum/", "completed": "false" },
            { "problem_statement": "Rotate Array", "link": "https://leetcode.com/problems/rotate-array/", "completed": "false" },
            { "problem_statement": "Intersection of Two Arrays", "link": "https://leetcode.com/problems/intersection-of-two-arrays/", "completed": "false" },
            { "problem_statement": "Majority Element", "link": "https://leetcode.com/problems/majority-element/", "completed": "false" },
            { "problem_statement": "Find the Duplicate Number", "link": "https://leetcode.com/problems/find-the-duplicate-number/", "completed": "false" },
            { "problem_statement": "Missing Number", "link": "https://leetcode.com/problems/missing-number/", "completed": "false" },
            { "problem_statement": "Single Number", "link": "https://leetcode.com/problems/single-number/", "completed": "false" },
            { "problem_statement": "Group Anagrams", "link": "https://leetcode.com/problems/group-anagrams/", "completed": "false" },
            { "problem_statement": "Top K Frequent Elements", "link": "https://leetcode.com/problems/top-k-frequent-elements/", "completed": "false" },
            { "problem_statement": "Valid Anagram", "link": "https://leetcode.com/problems/valid-anagram/", "completed": "false" },
            { "problem_statement": "Encode and Decode Strings", "link": "https://leetcode.com/problems/encode-and-decode-strings/", "completed": "false" },
            { "problem_statement": "Longest Palindromic Substring", "link": "https://leetcode.com/problems/longest-palindromic-substring/", "completed": "false" },
            { "problem_statement": "Trapping Rain Water", "link": "https://leetcode.com/problems/trapping-rain-water/", "completed": "false" },
            { "problem_statement": "Jump Game", "link": "https://leetcode.com/problems/jump-game/", "completed": "false" },
            { "problem_statement": "Merge Intervals", "link": "https://leetcode.com/problems/merge-intervals/", "completed": "false" },
            { "problem_statement": "Insert Interval", "link": "https://leetcode.com/problems/insert-interval/", "completed": "false" },
            { "problem_statement": "Interval List Intersections", "link": "https://leetcode.com/problems/interval-list-intersections/", "completed": "false" },
            { "problem_statement": "Set Matrix Zeroes", "link": "https://leetcode.com/problems/set-matrix-zeroes/", "completed": "false" },
            { "problem_statement": "Rotate Image", "link": "https://leetcode.com/problems/rotate-image/", "completed": "false" },
            { "problem_statement": "Spiral Matrix", "link": "https://leetcode.com/problems/spiral-matrix/", "completed": "false" },
            { "problem_statement": "Search a 2D Matrix", "link": "https://leetcode.com/problems/search-a-2d-matrix/", "completed": "false" },
            { "problem_statement": "Sort Colors", "link": "https://leetcode.com/problems/sort-colors/", "completed": "false" },
            { "problem_statement": "Pascal's Triangle", "link": "https://leetcode.com/problems/pascals-triangle/", "completed": "false" },
            { "problem_statement": "Next Permutation", "link": "https://leetcode.com/problems/next-permutation/", "completed": "false" },
            { "problem_statement": "Combination Sum", "link": "https://leetcode.com/problems/combination-sum/", "completed": "false" },
            { "problem_statement": "Subsets", "link": "https://leetcode.com/problems/subsets/", "completed": "false" },
            { "problem_statement": "Permutations", "link": "https://leetcode.com/problems/permutations/", "completed": "false" },
            { "problem_statement": "Decode Ways", "link": "https://leetcode.com/problems/decode-ways/", "completed": "false" },
            { "problem_statement": "Unique Paths", "link": "https://leetcode.com/problems/unique-paths/", "completed": "false" },
            { "problem_statement": "Climbing Stairs", "link": "https://leetcode.com/problems/climbing-stairs/", "completed": "false" },
            { "problem_statement": "Coin Change", "link": "https://leetcode.com/problems/coin-change/", "completed": "false" },
            { "problem_statement": "Maximum Product Subarray", "link": "https://leetcode.com/problems/maximum-product-subarray/", "completed": "false" },
            { "problem_statement": "Longest Increasing Subsequence", "link": "https://leetcode.com/problems/longest-increasing-subsequence/", "completed": "false" },
            { "problem_statement": "Edit Distance", "link": "https://leetcode.com/problems/edit-distance/", "completed": "false" },
            { "problem_statement": "Binary Search", "link": "https://leetcode.com/problems/binary-search/", "completed": "false" },
            { "problem_statement": "Reverse Linked List", "link": "https://leetcode.com/problems/reverse-linked-list/", "completed": "false" },
            { "problem_statement": "Linked List Cycle", "link": "https://leetcode.com/problems/linked-list-cycle/", "completed": "false" },
            { "problem_statement": "Remove Nth Node From End of List", "link": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", "completed": "false" },
            { "problem_statement": "LRU Cache", "link": "https://leetcode.com/problems/lru-cache/", "completed": "false" },
            { "problem_statement": "Flatten a Multilevel Doubly Linked List", "link": "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/", "completed": "false" },
            { "problem_statement": "Copy List with Random Pointer", "link": "https://leetcode.com/problems/copy-list-with-random-pointer/", "completed": "false" },
            { "problem_statement": "Remove Linked List Elements", "link": "https://leetcode.com/problems/remove-linked-list-elements/", "completed": "false" },
            { "problem_statement": "Palindrome Linked List", "link": "https://leetcode.com/problems/palindrome-linked-list/", "completed": "false" },
            { "problem_statement": "Reverse Nodes in k-Group", "link": "https://leetcode.com/problems/reverse-nodes-in-k-group/", "completed": "false" },
            { "problem_statement": "Binary Tree Preorder Traversal", "link": "https://leetcode.com/problems/binary-tree-preorder-traversal/", "completed": "false" },
            { "problem_statement": "Binary Tree Inorder Traversal", "link": "https://leetcode.com/problems/binary-tree-inorder-traversal/", "completed": "false" },
            { "problem_statement": "Binary Tree Postorder Traversal", "link": "https://leetcode.com/problems/binary-tree-postorder-traversal/", "completed": "false" },
            { "problem_statement": "Maximum Depth of Binary Tree", "link": "https://leetcode.com/problems/maximum-depth-of-binary-tree/", "completed": "false" },
            { "problem_statement": "Invert Binary Tree", "link": "https://leetcode.com/problems/invert-binary-tree/", "completed": "false" },
            { "problem_statement": "Symmetric Tree", "link": "https://leetcode.com/problems/symmetric-tree/", "completed": "false" },
            { "problem_statement": "Path Sum", "link": "https://leetcode.com/problems/path-sum/", "completed": "false" },
            { "problem_statement": "Sum Root to Leaf Numbers", "link": "https://leetcode.com/problems/sum-root-to-leaf-numbers/", "completed": "false" },
            { "problem_statement": "Construct Binary Tree from Preorder and Inorder Traversal", "link": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/", "completed": "false" },
            { "problem_statement": "Construct Binary Tree from Inorder and Postorder Traversal", "link": "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/", "completed": "false" },
            { "problem_statement": "Populating Next Right Pointers in Each Node", "link": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/", "completed": "false" },
            { "problem_statement": "Sum of Left Leaves", "link": "https://leetcode.com/problems/sum-of-left-leaves/", "completed": "false" },
            { "problem_statement": "Same Tree", "link": "https://leetcode.com/problems/same-tree/", "completed": "false" },
            { "problem_statement": "Subtree of Another Tree", "link": "https://leetcode.com/problems/subtree-of-another-tree/", "completed": "false" },
            { "problem_statement": "Binary Tree Level Order Traversal", "link": "https://leetcode.com/problems/binary-tree-level-order-traversal/", "completed": "false" },
            { "problem_statement": "Binary Tree Right Side View", "link": "https://leetcode.com/problems/binary-tree-right-side-view/", "completed": "false" },
            { "problem_statement": "Lowest Common Ancestor of a Binary Tree", "link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", "completed": "false" },
            { "problem_statement": "Kth Smallest Element in a BST", "link": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", "completed": "false" },
            { "problem_statement": "Validate Binary Search Tree", "link": "https://leetcode.com/problems/validate-binary-search-tree/", "completed": "false" },
            { "problem_statement": "Recover Binary Search Tree", "link": "https://leetcode.com/problems/recover-binary-search-tree/", "completed": "false" },
            { "problem_statement": "Serialize and Deserialize Binary Tree", "link": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", "completed": "false" },
            { "problem_statement": "Convert Sorted Array to Binary Search Tree", "link": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/", "completed": "false" },
            { "problem_statement": "Balanced Binary Tree", "link": "https://leetcode.com/problems/balanced-binary-tree/", "completed": "false" },
            { "problem_statement": "Binary Tree Maximum Path Sum", "link": "https://leetcode.com/problems/binary-tree-maximum-path-sum/", "completed": "false" },
            { "problem_statement": "Diameter of Binary Tree", "link": "https://leetcode.com/problems/diameter-of-binary-tree/", "completed": "false" },
            { "problem_statement": "Count Complete Tree Nodes", "link": "https://leetcode.com/problems/count-complete-tree-nodes/", "completed": "false" },
            { "problem_statement": "Binary Tree Zigzag Level Order Traversal", "link": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/", "completed": "false" },
            { "problem_statement": "Implement Queue using Stacks", "link": "https://leetcode.com/problems/implement-queue-using-stacks/", "completed": "false" },
            { "problem_statement": "Implement Stack using Queues", "link": "https://leetcode.com/problems/implement-stack-using-queues/", "completed": "false" },
            { "problem_statement": "Decode String", "link": "https://leetcode.com/problems/decode-string/", "completed": "false" },
            { "problem_statement": "Evaluate Reverse Polish Notation", "link": "https://leetcode.com/problems/evaluate-reverse-polish-notation/", "completed": "false" },
            { "problem_statement": "Design Circular Queue", "link": "https://leetcode.com/problems/design-circular-queue/", "completed": "false" },
            { "problem_statement": "Design Circular Deque", "link": "https://leetcode.com/problems/design-circular-deque/", "completed": "false" }
        ]
    }
];
export const problemDetails = [
  {
    problem_statement: "Two Sum",
    approach_1: "Brute force: try all pairs (i, j). Time O(n^2), Space O(1).",
    approach_2: "Use a HashMap of value→index, check complement in one pass. Time O(n), Space O(n).",
    ds: "HashMap",
    algo: "Hashing",
    link: "https://leetcode.com/problems/two-sum/"
  },
  {
    problem_statement: "Add Two Numbers",
    approach_1: "Simulate addition by iterating lists node by node. Handle carry. Time O(max(n, m)), Space O(max(n, m)).",
    approach_2: "Use dummy head while building result list. Time O(max(n, m)), Space O(max(n, m)).",
    ds: "Linked List",
    algo: "Simulation",
    link: "https://leetcode.com/problems/add-two-numbers/"
  },
  {
    problem_statement: "Longest Substring Without Repeating Characters",
    approach_1: "Check all substrings for uniqueness. Time O(n^2), Space O(n).",
    approach_2: "Sliding window with set/map to maintain window. Time O(n), Space O(min(n, Σ)).",
    ds: "HashSet",
    algo: "Sliding Window",
    link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
  },
  {
    problem_statement: "Median of Two Sorted Arrays",
    approach_1: "Merge arrays then pick median. Time O(n+m), Space O(n+m).",
    approach_2: "Binary search partition on smaller array. Time O(log(min(n,m))), Space O(1).",
    ds: "Array",
    algo: "Binary Search",
    link: "https://leetcode.com/problems/median-of-two-sorted-arrays/"
  },
  {
    problem_statement: "Valid Parentheses",
    approach_1: "Use a stack to match opens/closes. Time O(n), Space O(n).",
    approach_2: "Early return on mismatch; stack empty at end. Time O(n), Space O(n).",
    ds: "Stack",
    algo: "Stack",
    link: "https://leetcode.com/problems/valid-parentheses/"
  },
  {
    problem_statement: "Merge Two Sorted Lists",
    approach_1: "Concatenate and sort. Time O((n+m)log(n+m)), Space O(n+m).",
    approach_2: "Two pointers, attach smaller each step. Time O(n+m), Space O(1).",
    ds: "Linked List",
    algo: "Two Pointers",
    link: "https://leetcode.com/problems/merge-two-sorted-lists/"
  },
  {
    problem_statement: "Search in Rotated Sorted Array",
    approach_1: "Linear scan for target. Time O(n), Space O(1).",
    approach_2: "Modified binary search by checking sorted half. Time O(log n), Space O(1).",
    ds: "Array",
    algo: "Binary Search",
    link: "https://leetcode.com/problems/search-in-rotated-sorted-array/"
  },
  {
    problem_statement: "Product of Array Except Self",
    approach_1: "For each i, multiply all others. Time O(n^2), Space O(1).",
    approach_2: "Prefix and suffix products; write in-place. Time O(n), Space O(1) extra.",
    ds: "Array",
    algo: "Prefix Product",
    link: "https://leetcode.com/problems/product-of-array-except-self/"
  },
  {
    problem_statement: "Maximum Subarray",
    approach_1: "Try every subarray sum. Time O(n^2), Space O(1).",
    approach_2: "Kadane: track best ending here. Time O(n), Space O(1).",
    ds: "Array",
    algo: "Dynamic Programming",
    link: "https://leetcode.com/problems/maximum-subarray/"
  },
  {
    problem_statement: "Best Time to Buy and Sell Stock",
    approach_1: "Check all buy/sell pairs. Time O(n^2), Space O(1).",
    approach_2: "Track min so far and max profit. Time O(n), Space O(1).",
    ds: "Array",
    algo: "Greedy",
    link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
  },
  {
    problem_statement: "Container With Most Water",
    approach_1: "Check all pairs of lines. Time O(n^2), Space O(1).",
    approach_2: "Two pointers from ends, move shorter inward. Time O(n), Space O(1).",
    ds: "Array",
    algo: "Two Pointers",
    link: "https://leetcode.com/problems/container-with-most-water/"
  },
  {
    problem_statement: "3Sum",
    approach_1: "Triple loop over i<j<k. Time O(n^3), Space O(1).",
    approach_2: "Sort; fix i then two-pointer j/k skipping dups. Time O(n^2), Space O(1).",
    ds: "Array",
    algo: "Two Pointers",
    link: "https://leetcode.com/problems/3sum/"
  },
  {
    problem_statement: "4Sum",
    approach_1: "Quadruple loop. Time O(n^4), Space O(1).",
    approach_2: "Sort; two loops + two pointers with dedup. Time O(n^3), Space O(1).",
    ds: "Array",
    algo: "Two Pointers",
    link: "https://leetcode.com/problems/4sum/"
  },
  {
    problem_statement: "Remove Nth Node From End of List",
    approach_1: "Compute length, remove (L-n+1)th. Time O(n), Space O(1).",
    approach_2: "Two pointers gap n+1; remove first.next. Time O(n), Space O(1).",
    ds: "Linked List",
    algo: "Two Pointers",
    link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/"
  },
  {
    problem_statement: "Merge k Sorted Lists",
    approach_1: "Merge lists one by one. Time O(Nk), Space O(1).",
    approach_2: "Min-heap of heads; pop/push. Time O(N log k), Space O(k).",
    ds: "Min-Heap",
    algo: "Heap",
    link: "https://leetcode.com/problems/merge-k-sorted-lists/"
  },
  {
    problem_statement: "Group Anagrams",
    approach_1: "Pairwise check anagram via counts. Time O(n^2·L), Space O(1).",
    approach_2: "Hashmap keyed by sorted string / char count. Time O(n·LlogL or n·L), Space O(n·L).",
    ds: "HashMap",
    algo: "Hashing",
    link: "https://leetcode.com/problems/group-anagrams/"
  },
  {
    problem_statement: "Pow(x, n)",
    approach_1: "Multiply x, n times. Time O(|n|), Space O(1).",
    approach_2: "Exponentiation by squaring. Time O(log |n|), Space O(1).",
    ds: "Number",
    algo: "Binary Exponentiation",
    link: "https://leetcode.com/problems/powx-n/"
  },
  {
    problem_statement: "Climbing Stairs",
    approach_1: "Naive recursion. Time O(φ^n), Space O(n).",
    approach_2: "DP / Fibonacci iteration. Time O(n), Space O(1).",
    ds: "Array",
    algo: "Dynamic Programming",
    link: "https://leetcode.com/problems/climbing-stairs/"
  },
  {
    problem_statement: "Coin Change",
    approach_1: "DFS try all combinations. Time exponential, Space O(amount).",
    approach_2: "Bottom-up DP for min coins. Time O(n·amount), Space O(amount).",
    ds: "Array",
    algo: "Dynamic Programming",
    link: "https://leetcode.com/problems/coin-change/"
  },
  {
    problem_statement: "House Robber",
    approach_1: "Choose/skip recursively. Time O(2^n), Space O(n).",
    approach_2: "DP: rob[i]=max(rob[i-1], rob[i-2]+nums[i]). Time O(n), Space O(1).",
    ds: "Array",
    algo: "Dynamic Programming",
    link: "https://leetcode.com/problems/house-robber/"
  },
  {
    problem_statement: "House Robber II",
    approach_1: "Try all start points in circle. Time O(n^2), Space O(1).",
    approach_2: "DP twice: [0..n-2] and [1..n-1], take max. Time O(n), Space O(1).",
    ds: "Array",
    algo: "Dynamic Programming",
    link: "https://leetcode.com/problems/house-robber-ii/"
  },
  {
    problem_statement: "Longest Palindromic Substring",
    approach_1: "Check all substrings & test palindrome. Time O(n^3), Space O(1).",
    approach_2: "Expand around centers (or Manacher). Time O(n^2) (or O(n)), Space O(1).",
    ds: "String",
    algo: "Two Pointers",
    link: "https://leetcode.com/problems/longest-palindromic-substring/"
  },
  {
    problem_statement: "Palindromic Substrings",
    approach_1: "Enumerate all substrings & check. Time O(n^3), Space O(1).",
    approach_2: "Expand around centers counting palindromes. Time O(n^2), Space O(1).",
    ds: "String",
    algo: "Center Expansion",
    link: "https://leetcode.com/problems/palindromic-substrings/"
  },
  {
    problem_statement: "Longest Common Subsequence",
    approach_1: "Try all subsequences. Time O(2^{n+m}), Space O(n+m).",
    approach_2: "DP table of matches/mismatches. Time O(n·m), Space O(n·m) (or O(min(n,m))).",
    ds: "2D Array",
    algo: "Dynamic Programming",
    link: "https://leetcode.com/problems/longest-common-subsequence/"
  },
  {
    problem_statement: "Edit Distance",
    approach_1: "Recursive try insert/delete/replace. Time exponential.",
    approach_2: "DP table of operations. Time O(n·m), Space O(n·m).",
    ds: "2D Array",
    algo: "Dynamic Programming",
    link: "https://leetcode.com/problems/edit-distance/"
  },
  {
    problem_statement: "Unique Paths",
    approach_1: "DFS enumerate all paths. Time exponential.",
    approach_2: "Combinatorics or DP. Time O(n+m) / O(n·m), Space O(1)/O(n·m).",
    ds: "Array",
    algo: "Dynamic Programming",
    link: "https://leetcode.com/problems/unique-paths/"
  },
  {
    problem_statement: "Unique Paths II (with Obstacles)",
    approach_1: "DFS avoiding obstacles. Time exponential.",
    approach_2: "DP with zeros at blocked cells. Time O(n·m), Space O(n·m).",
    ds: "2D Array",
    algo: "Dynamic Programming",
    link: "https://leetcode.com/problems/unique-paths-ii/"
  },
  {
    problem_statement: "Minimum Path Sum",
    approach_1: "DFS all paths sum. Time exponential.",
    approach_2: "DP accumulating min cost. Time O(n·m), Space O(n·m) or O(m).",
    ds: "2D Array",
    algo: "Dynamic Programming",
    link: "https://leetcode.com/problems/minimum-path-sum/"
  },
  {
    problem_statement: "Word Break",
    approach_1: "Try all partitions recursively. Time exponential.",
    approach_2: "DP + HashSet dictionary. Time O(n^2), Space O(n).",
    ds: "HashSet",
    algo: "Dynamic Programming",
    link: "https://leetcode.com/problems/word-break/"
  },
  {
    problem_statement: "Word Break II",
    approach_1: "Backtrack all splits; huge repeat work. Time exponential.",
    approach_2: "DFS + memo over indices using dict set. Time exponential worst-case; Space O(n + #answers).",
    ds: "HashSet",
    algo: "Memoized DFS",
    link: "https://leetcode.com/problems/word-break-ii/"
  },
  {
    problem_statement: "Number of Islands",
    approach_1: "Scan grid; DFS/BFS flood-fill 1s. Time O(n·m), Space O(n·m).",
    approach_2: "Union-Find connect neighbors and count roots. Time O(n·m α(nm)), Space O(n·m).",
    ds: "Union-Find",
    algo: "BFS/DFS",
    link: "https://leetcode.com/problems/number-of-islands/"
  },
  {
    problem_statement: "Max Area of Island",
    approach_1: "Check all cells, DFS to count area. Time O(n·m), Space O(n·m).",
    approach_2: "Union-Find to aggregate sizes. Time O(n·m α), Space O(n·m).",
    ds: "Grid",
    algo: "DFS",
    link: "https://leetcode.com/problems/max-area-of-island/"
  },
  {
    problem_statement: "Surrounded Regions",
    approach_1: "Flip all 'O' blindly then fix. Incorrect.",
    approach_2: "BFS/DFS from borders to mark safe; flip the rest. Time O(n·m), Space O(n·m).",
    ds: "Queue",
    algo: "BFS",
    link: "https://leetcode.com/problems/surrounded-regions/"
  },
  {
    problem_statement: "Clone Graph",
    approach_1: "Create nodes then reconnect via nested search. Time O(V^2).",
    approach_2: "BFS/DFS with map old→new. Time O(V+E), Space O(V).",
    ds: "HashMap",
    algo: "Graph Traversal",
    link: "https://leetcode.com/problems/clone-graph/"
  },
  {
    problem_statement: "Course Schedule (Cycle Detection)",
    approach_1: "Greedily take any edge. Fails on cycles.",
    approach_2: "Topological sort via Kahn or DFS colors. Time O(V+E), Space O(V+E).",
    ds: "Graph",
    algo: "Topological Sort",
    link: "https://leetcode.com/problems/course-schedule/"
  },
  {
    problem_statement: "Course Schedule II (Order)",
    approach_1: "Try arbitrary order. May be invalid.",
    approach_2: "Return topo order from Kahn/DFS. Time O(V+E), Space O(V+E).",
    ds: "Graph",
    algo: "Topological Sort",
    link: "https://leetcode.com/problems/course-schedule-ii/"
  },
  {
    problem_statement: "Pacific Atlantic Water Flow",
    approach_1: "DFS from each cell to oceans. Time O(n·m·(n+m)).",
    approach_2: "Reverse BFS/DFS from both oceans; intersect. Time O(n·m), Space O(n·m).",
    ds: "Grid",
    algo: "BFS/DFS",
    link: "https://leetcode.com/problems/pacific-atlantic-water-flow/"
  },
  {
    problem_statement: "Rotting Oranges",
    approach_1: "Simulate minute by minute scanning all cells. Time O(T·n·m).",
    approach_2: "Multi-source BFS from rotten oranges. Time O(n·m), Space O(n·m).",
    ds: "Queue",
    algo: "BFS",
    link: "https://leetcode.com/problems/rotting-oranges/"
  },
  {
    problem_statement: "K Closest Points to Origin",
    approach_1: "Sort by distance. Time O(n log n), Space O(1).",
    approach_2: "Max-heap of size k or Quickselect. Time O(n log k) / avg O(n), Space O(k).",
    ds: "Heap",
    algo: "Heap / Quickselect",
    link: "https://leetcode.com/problems/k-closest-points-to-origin/"
  },
  {
    problem_statement: "Top K Frequent Elements",
    approach_1: "Sort by frequency descending. Time O(n log n).",
    approach_2: "Bucket sort by freq (or min-heap). Time O(n), Space O(n).",
    ds: "HashMap",
    algo: "Bucket Sort",
    link: "https://leetcode.com/problems/top-k-frequent-elements/"
  },
  {
    problem_statement: "Valid Anagram",
    approach_1: "Sort both strings and compare. Time O(n log n).",
    approach_2: "Count chars with array/map. Time O(n), Space O(Σ).",
    ds: "Array",
    algo: "Counting",
    link: "https://leetcode.com/problems/valid-anagram/"
  },
  {
    problem_statement: "Valid Palindrome",
    approach_1: "Build cleaned string then reverse compare. Time O(n), Space O(n).",
    approach_2: "Two pointers skipping non-alnum. Time O(n), Space O(1).",
    ds: "String",
    algo: "Two Pointers",
    link: "https://leetcode.com/problems/valid-palindrome/"
  },
  {
    problem_statement: "Longest Consecutive Sequence",
    approach_1: "Sort and scan. Time O(n log n), Space O(1).",
    approach_2: "HashSet; start only at sequence heads. Time O(n), Space O(n).",
    ds: "HashSet",
    algo: "Hashing",
    link: "https://leetcode.com/problems/longest-consecutive-sequence/"
  },
  {
    problem_statement: "Spiral Matrix",
    approach_1: "Visited matrix walk with direction turns. Time O(n·m), Space O(n·m).",
    approach_2: "Layer-by-layer bounds shrink. Time O(n·m), Space O(1).",
    ds: "Array",
    algo: "Simulation",
    link: "https://leetcode.com/problems/spiral-matrix/"
  },
  {
    problem_statement: "Rotate Image",
    approach_1: "Use extra matrix for rotated copy. Time O(n^2), Space O(n^2).",
    approach_2: "Transpose then reverse each row. Time O(n^2), Space O(1).",
    ds: "Matrix",
    algo: "In-place Transform",
    link: "https://leetcode.com/problems/rotate-image/"
  },
  {
    problem_statement: "Set Matrix Zeroes",
    approach_1: "Use O(nm) extra to mark zeros. Time O(nm), Space O(nm).",
    approach_2: "Use first row/col as markers. Time O(nm), Space O(1).",
    ds: "Matrix",
    algo: "In-place Marking",
    link: "https://leetcode.com/problems/set-matrix-zeroes/"
  },
  {
    problem_statement: "Search a 2D Matrix",
    approach_1: "Two-phase: binary search row then in-row. Time O(log m + log n).",
    approach_2: "Binary search over flattened indices. Time O(log(mn)), Space O(1).",
    ds: "Array",
    algo: "Binary Search",
    link: "https://leetcode.com/problems/search-a-2d-matrix/"
  },
  {
    problem_statement: "Search a 2D Matrix II",
    approach_1: "Binary search each row. Time O(m log n).",
    approach_2: "Start top-right; move left/down. Time O(m+n), Space O(1).",
    ds: "Array",
    algo: "Two Pointers",
    link: "https://leetcode.com/problems/search-a-2d-matrix-ii/"
  },
  {
    problem_statement: "Minimum Window Substring",
    approach_1: "All substrings check counts. Time O(n^2·Σ).",
    approach_2: "Sliding window with need/have counts. Time O(n), Space O(Σ).",
    ds: "HashMap",
    algo: "Sliding Window",
    link: "https://leetcode.com/problems/minimum-window-substring/"
  },
  {
    problem_statement: "Find Minimum in Rotated Sorted Array",
    approach_1: "Linear scan for drop. Time O(n).",
    approach_2: "Binary search by mid vs right. Time O(log n), Space O(1).",
    ds: "Array",
    algo: "Binary Search",
    link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"
  },
  {
    problem_statement: "Find Peak Element",
    approach_1: "Linear scan comparing neighbors. Time O(n).",
    approach_2: "Binary search using slope. Time O(log n), Space O(1).",
    ds: "Array",
    algo: "Binary Search",
    link: "https://leetcode.com/problems/find-peak-element/"
  },
  {
    problem_statement: "Binary Tree Level Order Traversal",
    approach_1: "DFS grouping by depth. Time O(n), Space O(n).",
    approach_2: "BFS queue per level. Time O(n), Space O(n).",
    ds: "Queue",
    algo: "BFS",
    link: "https://leetcode.com/problems/binary-tree-level-order-traversal/"
  },
  {
    problem_statement: "Binary Tree Zigzag Level Order Traversal",
    approach_1: "Reverse every other level list. Time O(n), Space O(n).",
    approach_2: "Deque to control order while BFS. Time O(n), Space O(n).",
    ds: "Deque",
    algo: "BFS",
    link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"
  },
  {
    problem_statement: "Maximum Depth of Binary Tree",
    approach_1: "BFS count levels. Time O(n), Space O(n).",
    approach_2: "DFS return 1+max(left,right). Time O(n), Space O(h).",
    ds: "Tree",
    algo: "DFS",
    link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/"
  },
  {
    problem_statement: "Diameter of Binary Tree",
    approach_1: "Compute heights for every node separately. Time O(n^2).",
    approach_2: "One DFS returning height and tracking max path. Time O(n), Space O(h).",
    ds: "Tree",
    algo: "DFS",
    link: "https://leetcode.com/problems/diameter-of-binary-tree/"
  },
  {
    problem_statement: "Validate Binary Search Tree",
    approach_1: "Check local child relations only. Fails globally.",
    approach_2: "DFS with min/max bounds or inorder check. Time O(n), Space O(h).",
    ds: "Tree",
    algo: "DFS",
    link: "https://leetcode.com/problems/validate-binary-search-tree/"
  },
  {
    problem_statement: "Lowest Common Ancestor of BST",
    approach_1: "Find paths to both nodes and compare. Time O(h), Space O(h).",
    approach_2: "Walk down using BST order. Time O(h), Space O(1).",
    ds: "Tree",
    algo: "BST Property",
    link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"
  },
  {
    problem_statement: "Lowest Common Ancestor of Binary Tree",
    approach_1: "Store parent pointers then climb. Time O(n), Space O(n).",
    approach_2: "Recursive: return node when sides differ. Time O(n), Space O(h).",
    ds: "Tree",
    algo: "DFS",
    link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/"
  },
  {
    problem_statement: "Construct Binary Tree from Preorder and Inorder Traversal",
    approach_1: "Linear search of root in inorder each time. Time O(n^2).",
    approach_2: "Hash map of inorder indices; recurse. Time O(n), Space O(n).",
    ds: "HashMap",
    algo: "Divide & Conquer",
    link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/"
  },
  {
    problem_statement: "Serialize and Deserialize Binary Tree",
    approach_1: "Inorder only—loses structure. Incorrect.",
    approach_2: "Preorder or BFS with nulls as markers. Time O(n), Space O(n).",
    ds: "Queue",
    algo: "Traversal Encoding",
    link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"
  },
  {
    problem_statement: "Binary Tree Right Side View",
    approach_1: "Level-order and take last. Time O(n), Space O(n).",
    approach_2: "DFS right-first tracking first visit per depth. Time O(n), Space O(h).",
    ds: "Tree",
    algo: "BFS/DFS",
    link: "https://leetcode.com/problems/binary-tree-right-side-view/"
  },
  {
    problem_statement: "Kth Smallest Element in a BST",
    approach_1: "Inorder to array then index. Time O(n), Space O(n).",
    approach_2: "Inorder with counter early stop. Time O(h+k), Space O(h).",
    ds: "Stack",
    algo: "Inorder Traversal",
    link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/"
  },
  {
    problem_statement: "Invert Binary Tree",
    approach_1: "Create new mirrored tree. Time O(n), Space O(n).",
    approach_2: "Swap children recursively/in BFS. Time O(n), Space O(h).",
    ds: "Tree",
    algo: "DFS/BFS",
    link: "https://leetcode.com/problems/invert-binary-tree/"
  },
  {
    problem_statement: "Symmetric Tree",
    approach_1: "Compare inorder traversals. Fails sometimes.",
    approach_2: "Compare mirrored pairs via DFS/queue. Time O(n), Space O(n).",
    ds: "Queue",
    algo: "DFS/BFS",
    link: "https://leetcode.com/problems/symmetric-tree/"
  },
  {
    problem_statement: "Subtree of Another Tree",
    approach_1: "Compare every node with DFS equals. Time O(n·m).",
    approach_2: "Serialize trees or subtree hashing. Time O(n+m), Space O(n+m).",
    ds: "Hashing",
    algo: "Tree Matching",
    link: "https://leetcode.com/problems/subtree-of-another-tree/"
  },
  {
    problem_statement: "Path Sum",
    approach_1: "Track sums along all paths to leaves. Time O(n), Space O(h).",
    approach_2: "DFS subtracting target along recursion. Time O(n), Space O(h).",
    ds: "Tree",
    algo: "DFS",
    link: "https://leetcode.com/problems/path-sum/"
  },
  {
    problem_statement: "Path Sum II",
    approach_1: "DFS store path; copy at each step. Time O(n), Space O(n).",
    approach_2: "Backtracking: push/pop values, add when leaf sum matches. Time O(n), Space O(h).",
    ds: "Tree",
    algo: "Backtracking",
    link: "https://leetcode.com/problems/path-sum-ii/"
  },
  {
    problem_statement: "Sum Root to Leaf Numbers",
    approach_1: "Collect numbers as strings then parse. Time O(n), Space O(n).",
    approach_2: "DFS carry numeric prefix; add at leaves. Time O(n), Space O(h).",
    ds: "Tree",
    algo: "DFS",
    link: "https://leetcode.com/problems/sum-root-to-leaf-numbers/"
  },
  {
    problem_statement: "Implement Trie (Prefix Tree)",
    approach_1: "Store words in array; linearly check prefixes. Time O(n·L).",
    approach_2: "Node with char→child map and flags. Insert/search Time O(L), Space O(Σ·nodes).",
    ds: "Trie",
    algo: "Prefix Tree",
    link: "https://leetcode.com/problems/implement-trie-prefix-tree/"
  },
  {
    problem_statement: "Word Search",
    approach_1: "Start DFS from every cell w/o pruning. Time O((mn)·4^L).",
    approach_2: "Backtracking with visited set; early prune on mismatch. Time O((mn)·4^L), Space O(L).",
    ds: "Grid",
    algo: "Backtracking",
    link: "https://leetcode.com/problems/word-search/"
  },
  {
    problem_statement: "Word Search II",
    approach_1: "Backtrack each word separately. Time huge.",
    approach_2: "Build Trie of words; backtrack once, pruning by Trie. Time O(mn·avgLen), Space O(total chars).",
    ds: "Trie",
    algo: "Backtracking + Trie",
    link: "https://leetcode.com/problems/word-search-ii/"
  },
  {
    problem_statement: "Implement LRU Cache",
    approach_1: "Array/map and reorder on access. put/get O(n).",
    approach_2: "HashMap + doubly linked list for O(1) get/put. Time O(1), Space O(capacity).",
    ds: "HashMap+DLL",
    algo: "Caching",
    link: "https://leetcode.com/problems/lru-cache/"
  },
  {
    problem_statement: "Min Stack",
    approach_1: "Track min by scanning on pop. Time O(n) pop.",
    approach_2: "Aux stack (or encode diff) to track mins. Time O(1) ops, Space O(n).",
    ds: "Stack",
    algo: "Stack with Aux",
    link: "https://leetcode.com/problems/min-stack/"
  },
  {
    problem_statement: "Daily Temperatures",
    approach_1: "For each day, scan forward. Time O(n^2).",
    approach_2: "Monotonic decreasing stack of indices. Time O(n), Space O(n).",
    ds: "Monotonic Stack",
    algo: "Stack",
    link: "https://leetcode.com/problems/daily-temperatures/"
  },
  {
    problem_statement: "Next Greater Element II",
    approach_1: "For each i, scan next n-1 elements. Time O(n^2).",
    approach_2: "Monotonic stack on circular array (twice loop). Time O(n), Space O(n).",
    ds: "Monotonic Stack",
    algo: "Stack",
    link: "https://leetcode.com/problems/next-greater-element-ii/"
  },
  {
    problem_statement: "Evaluate Reverse Polish Notation",
    approach_1: "Parse and compute using recursion. Time O(n), Space O(n).",
    approach_2: "Use a stack; push numbers, pop two on operator. Time O(n), Space O(n).",
    ds: "Stack",
    algo: "Stack",
    link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/"
  },
  {
    problem_statement: "Basic Calculator II",
    approach_1: "Build full AST then evaluate. Time O(n), Space O(n).",
    approach_2: "Single pass keep last term & total using stack/variables. Time O(n), Space O(n)/O(1).",
    ds: "Stack",
    algo: "Parsing",
    link: "https://leetcode.com/problems/basic-calculator-ii/"
  },
  {
    problem_statement: "Kth Largest Element in an Array",
    approach_1: "Sort descending then pick. Time O(n log n).",
    approach_2: "Quickselect avg O(n) or min-heap size k O(n log k).",
    ds: "Heap",
    algo: "Quickselect",
    link: "https://leetcode.com/problems/kth-largest-element-in-an-array/"
  },
  {
    problem_statement: "Find Median from Data Stream",
    approach_1: "Keep sorted list, insert by position. Time O(n) per op.",
    approach_2: "Two heaps (low max-heap, high min-heap). Time O(log n) per op, Space O(n).",
    ds: "Two Heaps",
    algo: "Heap",
    link: "https://leetcode.com/problems/find-median-from-data-stream/"
  },
  {
    problem_statement: "Sliding Window Maximum",
    approach_1: "Compute max for each window by scan. Time O(n·k).",
    approach_2: "Monotonic deque of candidates. Time O(n), Space O(k).",
    ds: "Deque",
    algo: "Monotonic Queue",
    link: "https://leetcode.com/problems/sliding-window-maximum/"
  },
  {
    problem_statement: "Meeting Rooms II",
    approach_1: "Greedy assign rooms by scanning overlaps naively. Time O(n^2).",
    approach_2: "Min-heap of end times or sweep-line. Time O(n log n), Space O(n).",
    ds: "Min-Heap",
    algo: "Greedy",
    link: "https://leetcode.com/problems/meeting-rooms-ii/"
  },
  {
    problem_statement: "Merge Intervals",
    approach_1: "Repeatedly merge any overlapping pair. Time O(n^2).",
    approach_2: "Sort by start then sweep merge. Time O(n log n), Space O(n).",
    ds: "Array",
    algo: "Sorting + Sweep",
    link: "https://leetcode.com/problems/merge-intervals/"
  },
  {
    problem_statement: "Insert Interval",
    approach_1: "Insert then sort and merge all. Time O(n log n).",
    approach_2: "Linear merge around insertion point. Time O(n), Space O(n).",
    ds: "Array",
    algo: "Sweep",
    link: "https://leetcode.com/problems/insert-interval/"
  },
  {
    problem_statement: "Non-overlapping Intervals",
    approach_1: "Try to keep the longest intervals. Suboptimal.",
    approach_2: "Greedy keep by earliest end; count removals. Time O(n log n), Space O(1).",
    ds: "Array",
    algo: "Greedy",
    link: "https://leetcode.com/problems/non-overlapping-intervals/"
  },
  {
    problem_statement: "Gas Station",
    approach_1: "Try each start; simulate. Time O(n^2).",
    approach_2: "Greedy: track total & current tank; restart when negative. Time O(n), Space O(1).",
    ds: "Array",
    algo: "Greedy",
    link: "https://leetcode.com/problems/gas-station/"
  },
  {
    problem_statement: "Jump Game",
    approach_1: "DP reachability table. Time O(n^2).",
    approach_2: "Greedy farthest reach / last good index. Time O(n), Space O(1).",
    ds: "Array",
    algo: "Greedy",
    link: "https://leetcode.com/problems/jump-game/"
  },
  {
    problem_statement: "Jump Game II",
    approach_1: "BFS levels over indices. Time O(n^2) worst.",
    approach_2: "Greedy window [currEnd,currFarthest] jumps. Time O(n), Space O(1).",
    ds: "Array",
    algo: "Greedy",
    link: "https://leetcode.com/problems/jump-game-ii/"
  },
  {
    problem_statement: "Candy",
    approach_1: "Iterative adjustments until stable. Time O(n^2).",
    approach_2: "Two passes (left→right and right→left). Time O(n), Space O(n).",
    ds: "Array",
    algo: "Greedy",
    link: "https://leetcode.com/problems/candy/"
  },
  {
    problem_statement: "Trapping Rain Water",
    approach_1: "For each bar, scan left/right max. Time O(n^2).",
    approach_2: "Two pointers with leftMax/rightMax (or stack). Time O(n), Space O(1)/O(n).",
    ds: "Array",
    algo: "Two Pointers",
    link: "https://leetcode.com/problems/trapping-rain-water/"
  },
  {
    problem_statement: "Min Cost Climbing Stairs",
    approach_1: "Recursion from top with overlap. Time exponential.",
    approach_2: "DP: dp[i]=cost[i]+min(dp[i-1],dp[i-2]). Time O(n), Space O(1).",
    ds: "Array",
    algo: "Dynamic Programming",
    link: "https://leetcode.com/problems/min-cost-climbing-stairs/"
  },
  {
    problem_statement: "Integer Break",
    approach_1: "Try all split combinations. Time exponential.",
    approach_2: "DP or math (use 3s). Time O(n), Space O(n).",
    ds: "Array",
    algo: "DP / Math",
    link: "https://leetcode.com/problems/integer-break/"
  },
  {
    problem_statement: "Perfect Squares",
    approach_1: "BFS on subtracting squares; naive visited. Time O(n√n).",
    approach_2: "DP over n using square transitions (or number theory). Time O(n√n), Space O(n).",
    ds: "Array",
    algo: "Dynamic Programming",
    link: "https://leetcode.com/problems/perfect-squares/"
  },
  {
    problem_statement: "Subarray Sum Equals K",
    approach_1: "All subarray sums via prefix double loop. Time O(n^2).",
    approach_2: "Prefix sum + hashmap of counts. Time O(n), Space O(n).",
    ds: "HashMap",
    algo: "Prefix Sum",
    link: "https://leetcode.com/problems/subarray-sum-equals-k/"
  },
  {
    problem_statement: "Range Sum Query - Mutable",
    approach_1: "On each query, sum slice. Time O(n) per query.",
    approach_2: "Fenwick/Segment Tree for updates & sums. Time O(log n) per op, Space O(n).",
    ds: "Fenwick/Segment Tree",
    algo: "Binary Indexed Tree",
    link: "https://leetcode.com/problems/range-sum-query-mutable/"
  },
  {
    problem_statement: "Count of Smaller Numbers After Self",
    approach_1: "Brute force count for each i. Time O(n^2).",
    approach_2: "Fenwick/Segment Tree or mergesort counting. Time O(n log n), Space O(n).",
    ds: "Fenwick/Segment Tree",
    algo: "Divide & Conquer",
    link: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/"
  },
  {
    problem_statement: "Number of Subarrays with Bounded Maximum",
    approach_1: "Check all subarrays and their max. Time O(n^2).",
    approach_2: "Count using two-pointer windows (≤R) − (≤L−1). Time O(n), Space O(1).",
    ds: "Array",
    algo: "Sliding Window",
    link: "https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/"
  },
  {
    problem_statement: "Bitwise AND of Numbers Range",
    approach_1: "AND all numbers in [L,R]. Time O(R−L).",
    approach_2: "Shift until L==R (common prefix). Time O(1..log range), Space O(1).",
    ds: "Bits",
    algo: "Bit Manipulation",
    link: "https://leetcode.com/problems/bitwise-and-of-numbers-range/"
  },
  {
    problem_statement: "Single Number",
    approach_1: "HashMap or sort to find unique. Time O(n) / O(n log n).",
    approach_2: "XOR all numbers to cancel pairs. Time O(n), Space O(1).",
    ds: "Bits",
    algo: "Bit Manipulation",
    link: "https://leetcode.com/problems/single-number/"
  },
  {
    problem_statement: "Reverse Bits",
    approach_1: "Reverse by string conversion. Time O(32), Space O(32).",
    approach_2: "Bitwise shift & mask per bit (or lookup). Time O(32), Space O(1).",
    ds: "Bits",
    algo: "Bit Manipulation",
    link: "https://leetcode.com/problems/reverse-bits/"
  },
  {
    problem_statement: "Total Hamming Distance",
    approach_1: "Compute pairwise distances. Time O(n^2·B).",
    approach_2: "For each bit, add ones·zeros. Time O(n·B), Space O(1).",
    ds: "Bits",
    algo: "Counting Bits",
    link: "https://leetcode.com/problems/total-hamming-distance/"
  }
];


export const seedSheetsWithIds = seedSheets.map(sheet => ({
    ...sheet,
    id: uuid(),
    problems: sheet.problems.map(problem => ({
        ...problem,
        id: uuid()
    }))
}));

export const seedProblemsWithIds = problemDetails.map(problem => ({
    ...problem,
    id: uuid()
}));