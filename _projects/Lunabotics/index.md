---
layout: post
title: "CMU NASA Lunabotics — \"Moon Miners\" Rover (2026)"
description: "Building a competition rover to autonomously excavate and shape lunar regolith. I’m leading a first-year team from zero -> test-ready hardware: mechanism design, integration, manufacturing planning, and getting the full system to behave in the real world (not just in CAD)."
skills:
  - Systems integration
  - Mechanism design (linkages, excavation, structures)
  - CAD (SolidWorks/Onshape) + FEA
  - Design reviews (SRR/PDR/CDR)
  - Prototyping & Manufacturing Planning
  - Test planning + Instrumentation
main-image: "/images/lunabotics-hero.png"
---

## The Mission
<div style="text-align: center;">
  {% include image-gallery.html images="images/group.jpg" height="750" %}
  <div style="font-size: 10px;">
    Moon Miners Team — CMU Lunabotics.
  </div>
</div>

We’re building a rover for NASA’s Lunabotics competition — the goal isn’t a flashy demo. It’s a machine that can **move regolith, on purpose, repeatedly**, and do it with the kind of reliability you’d trust in a harsh environment.

The part that hooked me is that this is a systems problem disguised as a robot: excavation mechanics, power and thermal constraints, traction in ugly terrain, sensors that lie, and software that only works when the physical world agrees. The mission is simple to say and hard to execute: **dig, transport, and shape material like it matters**.

{% include image-gallery.html images="images/lunabotics-hero.png" height="420" %}
<span style="font-size: 10px">Hero image: replace with your rover render or a clean team photo.</span>

---

## What I’m responsible for
I’m helping drive the project from “ideas” to **hardware we can test**, which means living in the space between design, procurement, manufacturing, and integration.

- Turning requirements into a real architecture (what must work first vs what can wait)
- Mechanical design + packaging: structure, mounts, interfaces, serviceability
- Coordinating integration points between mechanical / avionics / software
- Keeping us honest with reviews: clear assumptions, clear risks, clear next steps

If you’ve ever built a complex machine with a lot of smart people, you know the failure mode isn’t usually “no one is talented.” It’s **interfaces**. This role is basically: prevent interface pain early, and solve it fast when it shows up.

---

## The rover
At a high level, the rover is built around three realities:

1. **Excavation is brutal** — loads spike, material behaves inconsistently, and mechanism stiffness actually matters.
2. **Traction and stability decide everything** — you can have the best digger in the world and still lose if you can’t hold your ground.
3. **Integration is the product** — the robot only “exists” once the mechanical, electrical, and software stacks agree.

### Key subsystems
- **Excavation / material handling:** mechanism geometry, torque sizing, stiffness, wear surfaces
- **Chassis / structure:** mounting strategy, load paths, repairability, mass discipline
- **Sensor mast / perception mounting:** field-of-view needs vs structural constraints vs vibration
- **Powertrain / mobility interfaces:** packaging, alignment, and mechanical-electrical handoffs

{% include image-gallery.html images="images/mech-architecture.png" height="320" %}
<span style="font-size: 10px">Add: one clean CAD render + one “real build” photo. That combo sells credibility fast.</span>

---

## Design philosophy (how we avoid building a paper robot)
A first-year team can’t afford to chase perfection in CAD. The strategy is:

- **Prototype early** (even if it’s ugly)
- Instrument tests so we’re not guessing
- Freeze interfaces before we freeze aesthetics
- Build in serviceability (because we will break things)

This isn’t about being cautious — it’s about moving fast without lying to ourselves.

---

## What I’m proud of so far
A few early wins that mattered more than they sound:

- We moved from “cool concepts” to **a real architecture** with interfaces we can build
- We started treating testing like a first-class deliverable, not an afterthought
- We built momentum: ordering, manufacturing planning, and integration rhythms

The team energy is the best part. People want to win. You can feel it.

---

## What’s hard (and why that’s the point)
The hardest part is the “boring” part: getting a complex machine to work reliably when:

- material clogs
- tolerances stack up
- sensors drift
- vibrations loosen what you swore was tight
- the schedule doesn’t care

That’s the exact environment I want to be in. That’s where you learn.

---

## What’s next
Near-term goals are simple and aggressive:

- Lock mechanical interfaces and the integration plan
- Finish primary structure + excavation mechanism prototype
- Build a test rig / test matrix for digging and mobility performance
- Iterate based on data (not vibes)

If everything goes right, we’ll have a rover that doesn’t just “function” — it **earns trust**.

---

## Links
- Team / project page: [Moon Miners (CMU Lunabotics)](https://example.com)
- My portfolio: [muanmeurer.github.io](https://muanmeurer.github.io)

---

## Media (optional)
If you have a short clip of the mechanism moving, put it here. Doesn’t need to be cinematic — just real.

{% include youtube-video.html id="PUT_YOUTUBE_ID_HERE" autoplay= "false"%}
