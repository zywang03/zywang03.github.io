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
      <h3 class="project-title">{{ project.title }}</h3>
      {% if project.description %}
      <p class="project-description">{{ project.description }}</p>
      {% endif %}
      {% if project.code %}
      <div class="project-actions">
        <a href="{{ project.code }}" class="project-btn" target="_blank" rel="noopener">Code</a>
      </div>
      {% endif %}
    </div>
  </article>
{% endfor %}
{% else %}
  <p class="project-empty">Add entries in <code>_data/projects.yml</code> to show project cards here.</p>
{% endif %}
</div>

<style>
.projects-list {
  margin-top: 1.25rem;
}

.project-card {
  display: flex;
  align-items: center;
}

.project-card:not(:last-child) {
  margin-bottom: 2rem;
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
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
  font-weight: 700;
}

.project-description {
  margin: 0;
  line-height: 1.6;
}

.project-actions {
  margin-top: 0.9rem;
}

.project-btn {
  display: inline-block;
  color: #000000;
  border: 1px solid #000000;
  padding: 0.15rem 0.6rem;
  font-size: 14px;
  text-decoration: none;
}

.project-btn:hover {
  color: var(--global-theme-color);
  border-color: var(--global-theme-color);
  text-decoration: none;
}

.project-empty {
  color: var(--global-text-color-light, #828282);
  margin-top: 0.25rem;
}

@media (prefers-color-scheme: dark) {
  .project-btn {
    color: #FFFFFF;
    border-color: #FFFFFF;
  }
}

@media screen and (max-width: 768px) {
  .project-card {
    display: block;
  }

  .project-media {
    width: auto;
  }

  .project-thumb {
    width: 270px;
    height: auto;
    aspect-ratio: 270 / 123;
  }
}
</style>
