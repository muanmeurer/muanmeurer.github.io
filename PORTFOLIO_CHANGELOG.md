# Portfolio review changelog

## Homepage
- Reworked hero, About Me, and Featured Work copy.
- Replaced hero proof cards with three skill columns and placeholder project links.
- Updated homepage CSS.

## Lunabotics project
- Updated project narrative and outcomes; retained skills metadata.
- Replaced presentation photo with winter arena photo and electronics box photo with award plaque.
- Retained team photo, CAD diagram, and two existing videos.
- Removed precise payload/slip claims pending verification.

## CoilBoy project
- Rewrote project narrative in the same What is it / What did I do / How did it perform format.
- Enlarged requirements and concept images into individual centered full-width rows.
- Removed metric boxes, Excel graph images, and Discussion header.
- Preserved the existing video, test data table, and award photo.
- Clarified that the AWG24 case was an outlier rather than claiming universal ±3% repeatability.

## Quadrotor motion planning project
- Replaced Introduction / Methods / Results / Discussion with Who cares / What did we do / What is the answer.
- Preserved the three-environment image, motion-planning illustrations, and comparison graphs.
- Retained existing skills and project metadata; updated copy to distinguish simulation results from general real-world claims.

## MoonRanger CAD, FEA, EMI, Validation
- Replaced page copy and expanded skills; removed camera-shroud trade and opening ferrite gallery.
- Added new hero, bead analysis, DropBot, potted insert, and test-plan images.
- Existing wheel modal still serves as GIF placeholder; deployment test not claimed completed.

## MoonRanger animation
- Replaced first-mode still-image placeholder with supplied animated GIF (144.68 Hz shown in animation).

## Homepage visual refinement (October 2026)
- Removed both hero highlight bubbles; added Mechanical Engineering MS directly below name.
- Introduced vertical coral-red SKILLS label beside narrower, content-sized skill pills.
- Widened hero video column and enlarged video framing on desktop.
- Centered Featured Work subtext.
- Retained all existing project files and media from the user-provided complete repository archive.

## About, Lunabotics hero, and resume (October 23)
- Changed About heading to Hardware is King, but Software gives it Zing.
- Underlined hammer and electronics/control/analysis/testing phrases; bolded closing paragraph.
- Replaced Lunabotics project cover photo (also used for its Featured Work card) with supplied photo.
- Added Resume-Muan Meurer.pdf and updated the site-wide resume URL.

## Project presentation polish
- Reduced CoilBoy award image size.
- Removed orphaned CoilBoy metric cards and unmatched closing div.
- Adjusted image frames to hug media instead of stretching across grid columns.
- Linked all 12 homepage skills to relevant project pages.
- Reduced bold emphasis in running prose across five project pages; retained technical list labels.

## Kingfisher aquatic drone
- Added a new project with a dark split-layout, concise mission description, original CAD image, and original functional-decomposition flowchart.
- Added project card via Jekyll collection (order 6) and preserved all existing projects.
- Included a short development-status closing line.

## Project order and Kingfisher correction
- Featured Work order: Lunabotics, MoonRanger CAD/FEA/EMI, Kingfisher, MoonRanger Thermal, CoilBoy, Quadrotor.
- Clarified Kingfisher is for sensor-based bridge inspection; piston ballast adjusts buoyancy and does not collect samples.
- Restored the exact user-supplied functional-decomposition PNG without edits.

## October 23 editorial refresh
- Removed stray `x\`` before contact section.
- Reduced homepage rover video footprint and enlarged skill labels and links.
- Changed About title to “Making Machines Move” and increased portrait size 20%.
- Changed Featured Work title to “Rovers, Robots, Machines, and Doodads.”
- Restored detailed Lunabotics narrative and retained original project media.
- Reduced Westinghouse requirements image width about 30%; normalized project image frames and refined heading/paragraph contrast.

## October 23, 2026 — Layout and thermal narrative review
- Homepage hero restricted to the navigation's 1,200-pixel content width; balanced introduction and rover video side by side instead of vertically centering the video against a long skills stack.
- Moved Mechanical / Controls / Verification into a separate full-width, responsive skill band with larger red section labels and wrapping project-linked pills.
- Reduced the hero video to a natural 16:9 composition, kept it uncropped, and added an understated footage caption.
- Set consistent, uncropped limits for project covers and comparison figures; adjusted text and heading contrast while preserving the dark-blue visual identity.
- Rewrote MoonRanger Thermal in the shorter, personable Kingfisher narrative pattern: the design question, finite-difference Thermal Desktop approach, real duty-cycle results, and operational takeaway. Retained all original technical images and both videos.
- Corrected invalid footer HTML. Project order and all previous edits remain unchanged.
- Built a local browser preview of the resulting HTML/CSS and checked desktop, laptop and mobile layouts for horizontal overflow. This is a browser preview, not a full Jekyll deployment build.


## Editorial consistency and link repair (October 23, 2026)

- About Me paragraphs, section label, and emphasized text now render white.
- Homepage SKILLS label substantially larger/heavier; all three category headings and tag groups centered at desktop and mobile breakpoints.
- Added explicit `/projects/<slug>/` permalinks to every project, ensuring homepage skill tags point at stable Jekyll routes even when the source file is `index.md`.
- Redesigned Lunabotics, MoonRanger mechanical/EMI, CoilBoy, and Quadrotor project pages to share Kingfisher/Thermal's editorial split, concise kickers, responsive captions, and technical visual hierarchy.
- Preserved Kingfisher's original functional-decomposition chart and the existing project assets.
- Retained CoilBoy's full test table, MoonRanger verification specifics, Lunabotics team results, and the quadrotor comparative findings.
