{% assign publications = site.data.publications.main %}
{% assign selected_publications = publications | where: "selected", true %}
{% assign default_publication_view = "selected" %}
{% assign initial_visible_publication_count = selected_publications.size %}

<div id="publications-section">
<h2 id="publications" style="margin: 2px 0px 10px;">Publications</h2>

<div class="publication-filter">
  <span id="selectedBtn" class="filter-tab{% if default_publication_view == "selected" %} active{% endif %}" onclick="showSelected()">Selected</span>
  <span id="preprintBtn" class="filter-tab{% if default_publication_view == "preprint" %} active{% endif %}" onclick="showPreprints()">Preprints</span>
  <span id="fullBtn" class="filter-tab{% if default_publication_view == "full" %} active{% endif %}" onclick="showFull()">Full</span>
</div>

<div class="publications">
<ol class="bibliography">

{% for link in publications %}
<li class="publication-item {% if link.selected %}selected-publication{% else %}non-selected-publication{% endif %} {% if link.preprint %}preprint-publication{% else %}non-preprint-publication{% endif %}{% if default_publication_view == "selected" and link.selected != true %} hidden{% endif %}">
<div class="pub-row">
  <div class="publication-media abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    {% if link.image %}
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width=100;height=40%">
    {% if link.conference_short %}
    <abbr class="badge">{{ link.conference_short }}</abbr>
    {% endif %}
    {% endif %}
  </div>
  <div class="publication-content" style="position: relative;padding-right: 15px;padding-left: 20px;">
      <div class="title"><a href="{{ link.pdf }}">{{ link.title }}</a></div>
      <div class="author">{{ link.authors }}</div>
      <div class="periodical"><em>{{ link.conference }}</em></div>
    <div class="links">
      {% if link.pdf %}
      <a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:14px;">Paper</a>
      {% endif %}
      {% if link.code %}
      <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:14px;">Code</a>
      {% endif %}
      {% if link.page %}
      <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:14px;">Homepage</a>
      {% endif %}
      {% if link.twitter %}
      <a href="{{ link.twitter }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:14px;">Twitter</a>
      {% endif %}
      {% if link.bibtex %}
      <a href="{{ link.bibtex }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:14px;">BibTex</a>
      {% endif %}
      {% if link.notes %}
      <strong> <i style="color:#e74d3c"><b>{{ link.notes }}</b></i></strong>
      {% endif %}
      {% if link.others %}
      {{ link.others }}
      {% endif %}
    </div>
  </div>
</div>
</li>
{% endfor %}

</ol>
<p id="publicationEmptyState" class="publication-empty-state{% if initial_visible_publication_count > 0 %} hidden{% endif %}">Nothing here for now.</p>
</div>
</div>

<style>
.publication-filter {
  margin-bottom: 0.75rem;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  gap: 0;
}

#publications-section .publications {
  margin-top: 0.5rem;
}

.filter-tab {
  padding: 8px 16px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 500;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
  position: relative;
  top: 1px;
}

.filter-tab:not(.active) {
  color: var(--global-text-color-light, #828282);
}

.filter-tab:not(.active):hover {
  color: var(--global-theme-color, #002D72);
}

.filter-tab.active {
  color: var(--global-theme-color, #002D72);
  border-bottom-color: var(--global-theme-color, #002D72);
  cursor: default;
}

@media (prefers-color-scheme: dark) {
  .publication-filter {
    border-bottom-color: #404040;
  }

  .filter-tab:not(.active) {
    color: #999999;
  }

  .filter-tab:not(.active):hover {
    color: rgb(36, 150, 203);
  }

  .filter-tab.active {
    color: rgb(36, 150, 203);
    border-bottom-color: rgb(36, 150, 203);
  }
}

.publication-item {
  transition: opacity 0.3s ease;
}

.publication-item:not(:last-child) {
  margin-bottom: 2.5rem;
}

.publication-media {
  flex: 0 0 auto;
}

.publication-content {
  flex: 1 1 0;
  min-width: 0;
}

.publication-item.hidden {
  display: none;
}

.publication-empty-state {
  color: var(--global-text-color-light, #828282);
  margin-top: 0.25rem;
}

.publication-empty-state.hidden {
  display: none;
}

@media print, screen and (max-width: 480px) {
  .publication-media,
  .publication-content {
    display: block;
  }
}
</style>

<script>
function updatePublicationEmptyState(publicationsSection) {
  const emptyState = document.getElementById('publicationEmptyState');
  if (!emptyState) {
    return;
  }

  const visibleCount = publicationsSection.querySelectorAll('.publication-item:not(.hidden)').length;
  emptyState.classList.toggle('hidden', visibleCount > 0);
}

function setPublicationView(view) {
  const publicationsSection = document.getElementById('publications-section');
  if (!publicationsSection) {
    return;
  }

  const selectedTab = document.getElementById('selectedBtn');
  const preprintTab = document.getElementById('preprintBtn');
  const fullTab = document.getElementById('fullBtn');
  const allPublications = publicationsSection.querySelectorAll('.publication-item');
  const selected = publicationsSection.querySelectorAll('.selected-publication');
  const preprints = publicationsSection.querySelectorAll('.preprint-publication');

  allPublications.forEach(item => {
    item.classList.remove('hidden');
  });

  selectedTab.classList.remove('active');
  preprintTab.classList.remove('active');
  fullTab.classList.remove('active');

  if (view === 'selected') {
    allPublications.forEach(item => {
      item.classList.add('hidden');
    });

    selected.forEach(item => {
      item.classList.remove('hidden');
    });

    selectedTab.classList.add('active');
    updatePublicationEmptyState(publicationsSection);
    return;
  }

  if (view === 'preprint') {
    allPublications.forEach(item => {
      item.classList.add('hidden');
    });

    preprints.forEach(item => {
      item.classList.remove('hidden');
    });

    preprintTab.classList.add('active');
    updatePublicationEmptyState(publicationsSection);
    return;
  }

  fullTab.classList.add('active');
  updatePublicationEmptyState(publicationsSection);
}

function showSelected() {
  setPublicationView('selected');
}

function showPreprints() {
  setPublicationView('preprint');
}

function showFull() {
  setPublicationView('full');
}
</script>
