/*
Copyright 2019 Adam Pritchard
Licensed under Blue Oak Model License 1.0.0
*/

function navToSection(name) {
  document.querySelector('.ct-quick-nav__toggle').click();
  document.querySelector(`.ct-quick-nav__menu-item--${name} .ct-quick-nav__button`).click();
}

function getAllSections() {
  const sectionNames = ['actions', 'spells', 'equipment'];
  const sectionElements = [];
  for (let i = 0; i < sectionNames.length; i++) {
    navToSection(sectionNames[i])
    sectionElements.push(document.querySelector('.ct-component-carousel').cloneNode(true));
  }

  // Return to default section
  navToSection('main');

  return sectionElements;
}

function appendAllSections() {
  const sections = getAllSections();
  const parent = document.querySelector('.ct-component-carousel').parentElement;

  for (let i = 0; i < sections.length; i++) {
    parent.appendChild(sections[i]);
  }
}

function moveDefenses() {
  document.querySelector('.ct-combat-tablet__cta-button').click();
  document.querySelector('.ct-defense-manage-pane__custom').remove();
  for (let e of document.querySelectorAll('.ct-defense-manage-pane .ct-defense-manage-pane__item-extra')) {
    e.remove();
  }
  const elem = document.querySelector('.ct-defense-manage-pane').cloneNode(true);
  document.querySelector('.ct-quick-nav__edge-toggle').click();

  elem.querySelector('.ct-sidebar__header').remove();
  for (let e of elem.querySelectorAll('.ct-defense-manage-pane__heading')) {
    e.style['margin'] = 0;
    e.style['font-size'] = '12px';
  }
  for (let e of elem.querySelectorAll('.ct-defense-manage-pane__item')) {
    e.style['margin'] = 0;
    e.style['font-size'] = '12px';
  }
  for (let e of elem.querySelectorAll('.ct-defense-manage-pane__group')) {
    e.style['margin'] = 0;
  }

  const defensesBox = document.querySelector('.ct-combat-tablet__extra--statuses .ct-combat-tablet__ctas');
  while (defensesBox.firstChild) {
    defensesBox.firstChild.remove();
  }
  defensesBox.appendChild(elem);
  defensesBox.style['border'] = 'thin black solid';
}

function tweakStyles() {
  /*
  const proficiencyIcons = document.querySelectorAll('.ct-proficiency-icon');
  for (let i = 0; i < proficiencyIcons.length; i++) {
    proficiencyIcons[i].style['border'] = '5px black solid';
  }
  */

  // Remove top bar
  document.querySelector('div.site-bar').remove();
  document.querySelector('header.main').remove();
  document.querySelector('#mega-menu-target').remove();
  document.querySelector('#site-main').style['padding-top'] = 0;

  // Remove rest buttons
  document.querySelector('div.ct-character-header-tablet__group--short-rest').remove();
  document.querySelector('div.ct-character-header-tablet__group--long-rest').remove();

  // Remove extra padding from the sections
  for (let e of document.querySelectorAll('div.ct-subsection-tablet')) {
    e.style['padding'] = 0;
  }
  for (let e of document.querySelectorAll('div.ct-main-tablet__large-boxes')) {
    e.style['margin'] = 0;
  }
  document.querySelector('div.ct-combat-tablet').style['margin-top'] = '0';
  document.querySelector('div.ct-combat-tablet').style['margin-bottom'] = '0';

  // Remove bottom-right nav buttons
  document.querySelector('div.ct-quick-nav__portal').remove();

  // Clean up header
  document.querySelector('div.ct-character-header-tablet').style['background'] = 'white';
  document.querySelector('div.ct-character-tidbits__name').style['color'] = 'black';
  document.querySelector('div.ct-status-summary-mobile__health').style['color'] = 'black';
  document.querySelector('div.ct-status-summary-mobile__hp').style['color'] = 'black';
  document.querySelector('div.ct-status-summary-mobile__inspiration').remove();
  document.querySelector('span.ct-status-summary-mobile__hp-current').remove();
  document.querySelector('span.ct-status-summary-mobile__hp-sep').remove();
  document.querySelector('div.ct-status-summary-mobile__hp').style['font-size'] = '40px';

  // Move

  // Remove other extraneous elements
  document.querySelector('div.ct-actions .ct-tab-options__nav').remove();
  document.querySelector('a.ct-actions__manage-custom-link').remove();
  document.querySelector('div.ct-spells-filter').remove();
  document.querySelector('div.ct-spells__content .ct-tab-options__nav').remove();
  document.querySelector('div.ct-equipment__filter').remove();
  document.querySelector('div.ct-equipment__content .ct-tab-options__nav').remove();
  for (let e of document.querySelectorAll('span.ct-manage-icon__icon')) {
    e.remove();
  }
}

appendAllSections();
moveDefenses();
tweakStyles();
