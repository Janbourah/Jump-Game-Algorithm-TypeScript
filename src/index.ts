function canJump(nums: number[]): boolean {
  // Keep track of the furthest index we can currently reach
  let maxReach = 0;
  const target = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    // If the current index is beyond our maxReach, it means
    // we got trapped at a zero earlier and cannot proceed.
    if (i > maxReach) {
      return false;
    }

    // Update the maxReach. It's the maximum of what we could
    // already reach, or what we can reach from this new step.
    maxReach = Math.max(maxReach, i + (nums[i] ?? 0));

    // Early exit: If our reach meets or exceeds the target, we win.
    if (maxReach >= target) {
      return true;
    }
  }

  return false;
}

// --- Example Usage ---
// Example 1: Can reach the end
const arr1 = [2, 3, 1, 1, 4];
console.log(`Can jump arr1: ${canJump(arr1)}`); // Expected: true

// Example 2: Gets trapped at the 0
const arr2 = [3, 2, 1, 0, 4];
console.log(`Can jump arr2: ${canJump(arr2)}`); // Expected: false
