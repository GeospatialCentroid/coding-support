---
layout: single
title: "15-Minute Consultation Guidelines"
toc: true
toc_sticky: true
---


## 1\. Set the tone (first 1–2 minutes)

*   Be collaborative, not authoritative. You’re helping them learn, not just fixing code. 
    
*   Ask what they _think_ is going wrong and what they’ve already tried. 
    
*   Clarify the goal: _“What should this code be doing when it works?”_ 
    

Tip: If they can’t clearly describe the expected behavior, that’s already a useful signal. 

## 2. Don’t touch the keyboard (unless invited)

*   **Ideally, don’t touch the other student’s computer.** 
    
*   Ask permission before typing, clicking, or running anything: 
    
*   _“Mind if I try something?”_ 
    
*   Prefer talking through changes and letting them implement fixes themselves. 
    

Why this matters: 

*   It reinforces learning. 
    
*   It avoids “magic fixes” they can’t reproduce later. 
    

## 3\. Understand before solving

Resist the urge to jump straight into code changes. 

First, make sure you understand: 

*   What language / framework / environment is involved 
    
*   What input goes in and what output is expected 
    
*   What actually happens instead (errors, wrong output, nothing at all) 
    

Ask targeted questions: 

*   _“When did this last work?”_ 
    
*   _“What changed right before it broke?”_ 
    
*   _“Is this error new or intermittent?”_ 
    

## 4\. Reproduce and isolate the problem

Efficient debugging beats clever fixes. 

*   Try to **reproduce the issue consistently** 
    
*   Isolate the smallest piece of code that shows the problem: 
    
*   Comment things out 
    
*   Simplify inputs 
    
*   Hard-code values temporarily 
    
*   Check assumptions: 
    
    -   Are variables what they think they are? 
    
    -   Is async code actually finishing? 
    
    -   Are files/paths/configs correct? 
    

If you can’t explain _why_ something fails, you probably haven’t isolated it yet. 

## 5\. Read errors literally

*   Read error messages **out loud** together. 
    
*   Identify: 
    
    -  The exact line number 
    
    -  The type of error (syntax, runtime, logic) 
    
    -   Search the docs mentally before searching the web. 
    

Many bugs are solved by actually slowing down and reading what the system is already telling you. 

## 6\. Be time-aware and decisive

These sessions are **15 minutes**—optimize for impact. 

*   If you’re stuck after ~10 minutes: 
    
*   Summarize what you _do_ know 
    
*   Suggest next steps rather than forcing a solution 
    
*   Focus on: 
    
    -  Unblocking them 
    
    -  Teaching a debugging approach they can reuse 
    

Examples: 

*   “Try logging this variable before the loop” 
    
*   “Check the type here—this looks like a string vs number issue” 
    
*   “Run just this function in isolation” 
    

## 7\. Leave them with ownership

Before wrapping up: 

*   Ask them to explain the fix back to you 
    
*   Confirm they can continue independently 
    
*   Suggest one follow-up check or improvement 
    

Success isn’t fixing the bug—it’s helping them fix the _next_ one.