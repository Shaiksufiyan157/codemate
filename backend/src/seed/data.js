export const seedSheets = [

    {
        "name": "Striver A2Z (Sample)",
        "problems": [
            { "problem_statement": "Two Sum", "link": "https://leetcode.com/problems/two-sum/" },
            { "problem_statement": "Valid Parentheses", "link": "https://leetcode.com/problems/valid-parentheses/" },
            { "problem_statement": "Merge Two Sorted Lists", "link": "https://leetcode.com/problems/merge-two-sorted-lists/" },
            { "problem_statement": "Binary Search", "link": "https://leetcode.com/problems/binary-search/" }
        ]
    },
    {
        "name": "Love Babbar 450 (Sample)",
        "problems": [
            { "problem_statement": "Reverse an Array", "link": "https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/" },
            { "problem_statement": "Kadane’s Algorithm", "link": "https://leetcode.com/problems/maximum-subarray/" },
            { "problem_statement": "Detect Cycle in Linked List", "link": "https://leetcode.com/problems/linked-list-cycle/" }
        ]
    },
    {
        "name": "Company Prep Sheet (Sample)",
        "problems": [
            { "problem_statement": "LRU Cache", "link": "https://leetcode.com/problems/lru-cache/" },
            { "problem_statement": "Top K Frequent Elements", "link": "https://leetcode.com/problems/top-k-frequent-elements/" },
            { "problem_statement": "Dijkstra’s Shortest Path (Impl.)", "link": "" }
        ]
    }

];
export const seedProblems = [
  {
    problem_statement: "Two Sum",
    approach_1:
      "Brute force: try all pairs (i, j). Time O(n^2), Space O(1).",
    approach_2:
      "Use a HashMap of value→index, check complement in one pass. Time O(n), Space O(n).",
    ds: "HashMap",
    algo: "Hashing",
  },
  {
    problem_statement: "Valid Parentheses",
    approach_1:
      "Use a stack; push opens, pop on matching close. Empty stack at end ⇒ valid.",
    approach_2:
      "Counter-based only works for single-type parentheses; for multi-type, stack is reliable.",
    ds: "Stack",
    algo: "Stack",
  },
  {
    problem_statement: "Merge Two Sorted Lists",
    approach_1:
      "Iterative two-pointers merging into a dummy head. Time O(n+m), Space O(1).",
    approach_2:
      "Recursive: pick smaller head and recurse. Time O(n+m), Space O(n+m) call stack.",
    ds: "Linked List",
    algo: "Two Pointers",
  },
  {
    problem_statement: "Binary Search on Rotated Sorted Array",
    approach_1:
      "Find pivot then binary search in the correct half. Time O(log n).",
    approach_2:
      "Modified BS: at each step, detect sorted half and discard the other. Time O(log n).",
    ds: "Array",
    algo: "Binary Search",
  },
  {
    problem_statement: "Shortest Path in Unweighted Graph",
    approach_1:
      "BFS from source; parent array to reconstruct path. Time O(V+E).",
    approach_2:
      "Multi-source BFS if multiple start nodes; same complexity.",
    ds: "Graph",
    algo: "BFS",
  },
];
