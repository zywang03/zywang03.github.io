{% assign publications = site.data.publications.main %}
{% assign selected_publications = publications | where: "selected", true %}
{% assign initial_visible_publication_count = selected_publications.size %}

<div id="publications-section">
<h2 id="publications" style="margin: 2px 0px 10px;">Publications</h2>

<div class="publications">
<ol class="bibliography">

{% for link in publications %}
<li class="publication-item {% if link.selected %}selected-publication{% else %}non-selected-publication{% endif %} {% if link.preprint %}preprint-publication{% else %}non-preprint-publication{% endif %}{% if link.selected != true %} hidden{% endif %}">
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    {% if link.image %}
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width=100;height=40%">
    {% if link.conference_short %}
    <abbr class="badge">{{ link.conference_short }}</abbr>
    {% endif %}
    {% endif %}
  </div>
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
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
#publications-section .publications {
  margin-top: 0.5rem;
}

.publication-item {
  transition: opacity 0.3s ease;
}

.publication-item:not(:last-child) {
  margin-bottom: 2.5rem;
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
  .pub-row > .abbr,
  .pub-row > .col-sm-9 {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    padding-left: 12px !important;
    padding-right: 12px !important;
  }

  .publications ol.bibliography li .abbr {
    height: auto;
    margin-bottom: 0.5rem;
  }

  .publications ol.bibliography li .teaser {
    display: block;
    width: 100%;
    max-width: 270px;
    height: auto;
    aspect-ratio: 270 / 123;
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
