---
layout: single
title: "Coding Support Request"
permalink: support-request/
toc: true
toc_sticky: true
---

We offer coding and data support across a range of tools and workflows. Before submitting a request, please review our [Coding Support Policy]({{ site.baseurl }}/support-policy/) to understand expectations and ensure we can best assist you.

To get started, complete the form below with details about your request. Once submitted, a member of our team will follow up to schedule a 15-minute consultation via Microsoft Teams. Please ensure your calendar is up to date, or include your availability so we can coordinate a convenient time.

---

## 🛠️ Services We Offer

- Python (data analysis, scripting, automation)
- R (statistical analysis, visualization)
- Git (version control, GitHub workflows)
- Data Visualization (best practices, dashboards)
- Web Development (HTML5, CSS3, and JavaScript)
- Excel (formulas, charts, data cleaning)
- Power BI (dashboards, reporting)
- ArcGIS Pro & GIS (mapping, spatial analysis)

---

## 📅 Request Support

<form id="supportForm" action="YOUR_POWER_AUTOMATE_URL_HERE" method="POST">

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
  <option>Web Development</option>
  <option>Excel</option>
  <option>Power BI</option>
  <option>ArcGIS Pro / GIS</option>
</select><br><br>

<label for="details">Brief description of your issue:</label><br>
<textarea id="details" rows="4" required></textarea><br><br>

<label for="availability">Your availability (optional):</label><br>
<input type="text" id="availability"><br><br>

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
  const availability = document.getElementById("availability").value;

  const subject = encodeURIComponent("Coding Support Request: " + topic);

  const body = encodeURIComponent(
    "Name: " + name + "\\n" +
    "Email: " + email + "\\n" +
    "Topic: " + topic + "\\n\\n" +
    "Details:\\n" + details + "\\n\\n" +

    "Preferred meeting time: "+ availability + "\\n\\n" +
  );

  window.location.href = `mailto:youremail@domain.com?subject=${subject}&body=${body}`;
});
</script>