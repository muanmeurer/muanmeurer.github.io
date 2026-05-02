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

## Introduction

Autonomous robots need paths that are not only collision-free, but also physically reasonable to follow. This project focused on 3D motion planning for a quadrotor-style robot in obstacle-filled environments. The objective was to compare planning approaches that handle map geometry, vehicle motion constraints, and trajectory quality instead of only drawing a straight line from start to goal.

## Methods

I implemented and debugged the planning stack in Python. PLY environments were converted into voxel occupancy grids, then searched using Hybrid A*, A* with motion primitives, and RRT*. The motion-primitive branch generated short feasible arcs so candidate paths respected heading and local motion constraints. The RRT* branch generated a geometric path and then applied minimum-snap-style smoothing. Each output was collision checked and evaluated using path length, planning time, smoothness or curve cost, and average obstacle clearance.

![Mobile robots planner placeholder](/assets/images/portfolio/mobile-robots-placeholder.svg)

## Results

The comparison showed that each planner had a different failure mode. Hybrid A* and motion primitives produced more structured paths, but they required careful tuning of yaw bins, primitive duration, goal tolerance, and cost weights. RRT* with smoothing often produced cleaner trajectories, but smoothing could introduce collisions if the new curve cut through obstacles. The final stack made those tradeoffs visible through visualizations and performance metrics.

## Discussion

The project reinforced that planning quality is tied to modeling choices. Voxel resolution, obstacle representation, coordinate frames, collision-checking density, and cost-function design all changed the behavior of the planner. This project demonstrates robotics software development, algorithm evaluation, Python debugging, 3D visualization, and the ability to connect numerical metrics to physical robot behavior.
