<div id="projects-section">
<h2 id="projects" style="margin: 2px 0px 10px;">Projects</h2>

{% assign projects = site.data.projects.main %}

<div class="projects-list">
{% if projects and projects.size > 0 %}
{% for project in projects %}
  <article class="project-card">
    {% if project.image %}
    <div class="project-media">
      <img src="{{ project.image }}" alt="{{ project.title }} preview" class="project-thumb">
    </div>
    {% endif %}
    <div class="project-content">
      <div class="project-title">{{ project.title }}</div>
      {% if project.description %}
      <div class="project-description">{{ project.description }}</div>
      {% endif %}
      {% if project.code or project.page %}
      <div class="project-links">
        {% if project.code %}
        <a href="{{ project.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener" style="font-size:14px;">Code</a>
        {% endif %}
        {% if project.page %}
        <a href="{{ project.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener" style="font-size:14px;">Homepage</a>
        {% endif %}
      </div>
      {% endif %}
    </div>
  </article>
{% endfor %}
{% else %}
  <p class="project-empty">Add entries in <code>_data/projects.yml</code> to show project cards here.</p>
{% endif %}
</div>
</div>

<style>
.projects-list {
  margin-top: 0.5rem;
  margin-bottom: 20px;
}

.project-card {
  display: flex;
  align-items: center;
  min-height: 110px;
}

.project-card:not(:last-child) {
  margin-bottom: 2.5rem;
}

.project-media {
  position: relative;
  padding-right: 15px;
  padding-left: 15px;
}

.project-thumb {
  display: block;
  width: 270px;
  height: 123px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 3px 3px 6px #888;
  margin-top: 5px;
  margin-left: 5px;
  margin-bottom: 5px;
}

.project-content {
  position: relative;
  padding-right: 15px;
  padding-left: 20px;
  width: 100%;
}

.project-title {
  font-weight: bolder;
}

.project-description {
  margin-top: 0.15rem;
  line-height: 1.4em;
}

.project-links {
  margin-top: 0.35rem;
}

.project-links a.btn {
  display: inline-block;
  color: #000000;
  border: 1px solid #000000;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  text-decoration: none;
}

.project-links a.btn:hover {
  color: var(--global-theme-color);
  border-color: var(--global-theme-color);
  text-decoration: none;
}

.project-empty {
  color: var(--global-text-color-light, #828282);
  margin-top: 0.25rem;
}

@media (prefers-color-scheme: dark) {
  .project-links a.btn {
    color: #FFFFFF;
    border-color: #FFFFFF;
  }
}

@media print, screen and (max-width: 480px) {
  .project-card {
    display: block;
  }

  .project-media {
    box-sizing: border-box;
    width: auto;
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
    margin-bottom: 0.5rem;
  }

  .project-content {
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
  }

  .project-thumb {
    width: 100%;
    max-width: 270px;
    height: auto;
    aspect-ratio: 270 / 123;
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
