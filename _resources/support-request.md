---
layout: single
title: "Coding Support Request"
permalink: /support-request/
author_profile: false
# sidebar:
#   nav: "coding_sidebar"
# toc: false
---

We offer coding and data support across a range of tools and workflows. Use the form below to request help and schedule a virtual session.

---

## 🛠️ Services We Offer

- Python (data analysis, scripting, automation)
- R (statistical analysis, visualization)
- Git (version control, GitHub workflows)
- Data Visualization (best practices, dashboards)
- Excel (formulas, charts, data cleaning)
- Power BI (dashboards, reporting)
- ArcGIS Pro & GIS (mapping, spatial analysis)

---

## 📅 Request Support

<form id="supportForm">

<label for="name">Your Name:</label><br>
<input type="text" id="name" required><br><br>

<label for="email">Your Email:</label><br>
<input type="email" id="email" required><br><br>

<label for="topic">What do you need help with?</label><br>
<select id="topic" class="btn btn--primary" required>
  <option value="">-- Select a topic --</option>
  <option>Python</option>
  <option>R</option>
  <option>Git</option>
  <option>Data Visualization</option>
  <option>Excel</option>
  <option>Power BI</option>
  <option>ArcGIS Pro / GIS</option>
</select><br><br>

<label for="details">Brief description of your issue:</label><br>
<textarea id="details" rows="4" required></textarea><br><br>
<div class="right">
    <button class="btn btn--primary" type="submit">Request Support</button>
</div>
</form>


---

<script>
document.getElementById("supportForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const topic = document.getElementById("topic").value;
  const details = document.getElementById("details").value;

  const subject = encodeURIComponent("Coding Support Request: " + topic);

  const body = encodeURIComponent(
    "Name: " + name + "\\n" +
    "Email: " + email + "\\n" +
    "Topic: " + topic + "\\n\\n" +
    "Details:\\n" + details + "\\n\\n" +
    "Preferred meeting time: "
  );

  window.location.href = `mailto:youremail@domain.com?subject=${subject}&body=${body}`;
});
</script>