// init Isotope
var $container = $('.product-card-container').isotope({
  itemSelector: '.product-card',
  masonry: {
    columnWidth: '.product-filter-grid-sizer',
    gutter: '.product-filter-gutter-sizer'
  },
  percentPosition: true
});

// filter with selects and checkboxes
var $checkboxes = $('#product-filter-ui input');

$checkboxes.change( function() {
  // map input values to an array
  var inclusives = [];
  // inclusive filters from checkboxes
  $checkboxes.each( function( i, elem ) {
    // if checkbox, use value if checked
    if ( elem.checked ) {
      inclusives.push( elem.value );
    }
  });

  // combine inclusive filters
  var filterValue = inclusives.length ? inclusives.join(', ') : '*';

  $container.isotope({ filter: filterValue })
});

// Accordion
const accordionContainers = document.querySelectorAll('.product-filter-ui__section');

for (let i = 0; i < accordionContainers.length; i++) {
  let accordionContainer = accordionContainers[i];
  accordionContainer.addEventListener('click', function() {
    this.classList.toggle('is-open-accordion-container');
  });
}
