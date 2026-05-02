---
layout: post
order: 3
title: "Mobile Robots: 3D Motion Planning Stack"
description: "Implemented and compared 3D planning approaches using voxel maps, Hybrid A*, motion primitives, RRT*, and minimum-snap trajectory smoothing."
skills:
  - Python
  - Motion planning
  - RRT*
  - Hybrid A*
  - Trajectory generation
  - Open3D
main-image: "/cover.svg"
---

## Objective

This project explored how to plan feasible 3D paths through obstacle-filled environments for a quadrotor-style robot. The objective was not just to find a collision-free line from start to goal, but to compare planning approaches that produce paths a real vehicle could more reasonably follow. The work focused on voxelized environments, motion primitives, Hybrid A*, RRT*, and trajectory smoothing.

## My Role

I implemented and debugged the planning stack in Python, including map conversion, search logic, primitive generation, collision checking, visualization, and evaluation metrics. I worked through the practical problems that show up when planning code moves from simple examples to dense 3D maps: coordinate transforms, voxel indexing, obstacle representation, goal tolerance, runtime, path choppiness, and collisions introduced during smoothing.

## Design and Process

The stack used PLY environments converted into occupancy grids. One branch used A* or Hybrid A* with motion primitives so that candidate paths respected heading and local motion constraints instead of making unrealistic point-to-point jumps. Another branch used RRT* to generate a geometric path, then applied minimum-snap-style smoothing to improve trajectory quality. Paths were evaluated using metrics such as total path length, planning time, smoothness or curve cost, and average clearance to obstacles.

## Outcome and Evaluation

The project made the tradeoffs between planners clear. Hybrid A* and motion primitives produced more structured behavior but required careful tuning of yaw bins, primitive duration, and cost terms. RRT* with smoothing produced cleaner paths in some cases, but smoothing had to be collision checked because a mathematically smooth path can cut through obstacles. This project demonstrates my ability to build, debug, and evaluate robotics algorithms while keeping the physical meaning of the outputs in mind.

## Skills Demonstrated

- Built Python tools for 3D occupancy-grid planning and visualization
- Implemented collision checking against voxelized PLY environments
- Compared Hybrid A*, motion primitive planning, RRT*, and trajectory smoothing
- Used path length, runtime, smoothness, and clearance metrics to evaluate performance
- Debugged coordinate-frame, resolution, and obstacle-representation issues

## Suggested Images to Add

Add screenshots of the planned path, obstacle field, motion primitive visualization, RRT* tree, and final comparison chart.
