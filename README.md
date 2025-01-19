# React Native FlatList: Non-Unique Keys

This repository demonstrates a common but subtle bug in React Native's FlatList component: rendering issues caused by non-unique keys in the data array.  When the `keyExtractor` function returns duplicate keys, FlatList's internal state management can become corrupted, leading to unpredictable behavior.

## Problem
The provided `bug.js` file shows a FlatList with duplicate keys. This results in incorrect rendering, item misplacement, or other unexpected behavior.  The error is not always immediately apparent.

## Solution
The `bugSolution.js` file demonstrates the fix: ensuring unique keys across all data items. The solution involves creating and using a reliable unique key for each item in your data array.  Consider using UUIDs or a combination of item properties to guarantee uniqueness.