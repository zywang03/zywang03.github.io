<h2 id="projects" style="margin: 2px 0px 10px;">Projects</h2>

<div class="publications">
<ol class="bibliography">

{% assign projects = site.data.projects.main %}
{% if projects and projects.size > 0 %}
{% for project in projects %}

<li class="publication-item">
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    {% if project.image %}
    <img src="{{ project.image }}" class="teaser img-fluid z-depth-1" style="width=100;height=40%">
    {% if project.badge %}
    <abbr class="badge">{{ project.badge }}</abbr>
    {% endif %}
    {% endif %}
  </div>
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
    <div class="title">
      {% if project.project_url %}
      <a href="{{ project.project_url }}">{{ project.title }}</a>
      {% else %}
      {{ project.title }}
      {% endif %}
    </div>
    {% if project.subtitle %}
    <div class="author">{{ project.subtitle }}</div>
    {% endif %}
    {% if project.description %}
    <div class="periodical"><em>{{ project.description }}</em></div>
    {% endif %}
    <div class="links">
      {% if project.project_url %}
      <a href="{{ project.project_url }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:14px;">Project</a>
      {% endif %}
      {% if project.code %}
      <a href="{{ project.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:14px;">Code</a>
      {% endif %}
      {% if project.demo %}
      <a href="{{ project.demo }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:14px;">Demo</a>
      {% endif %}
      {% if project.paper %}
      <a href="{{ project.paper }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:14px;">Paper</a>
      {% endif %}
      {% if project.page %}
      <a href="{{ project.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:14px;">Homepage</a>
      {% endif %}
      {% if project.notes %}
      <strong><i style="color:#e74d3c"><b>{{ project.notes }}</b></i></strong>
      {% endif %}
      {% if project.others %}
      {{ project.others }}
      {% endif %}
    </div>
  </div>
</div>
</li>

{% endfor %}
{% else %}
<li class="publication-item">
  <div class="pub-row">
    <div class="col-sm-12" style="padding-right: 15px;padding-left: 20px;">
      <div class="periodical project-empty">Add entries in <code>_data/projects.yml</code> to show project cards here.</div>
    </div>
  </div>
</li>
{% endif %}

</ol>
</div>

<style>
.project-empty {
  color: var(--global-text-color-light, #828282);
  margin-top: 0.25rem;
}
</style>
