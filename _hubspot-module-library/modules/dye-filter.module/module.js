// init Isotope
var $container = $('.dye-card-container').isotope({
  itemSelector: '.dye-card',
  masonry: {
    columnWidth: '.dye-filter-grid-sizer',
    gutter: '.dye-filter-gutter-sizer'
  },
  percentPosition: true
});

// filter with selects and checkboxes
var $checkboxes = $('#dye-filter-ui input');

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
const accordionContainers = document.querySelectorAll('.dye-filter-ui__section');

for (let i = 0; i < accordionContainers.length; i++) {
  let accordionContainer = accordionContainers[i];
  accordionContainer.addEventListener('click', function() {
    this.classList.toggle('is-open-accordion-container');
  });
}

// HTML 2 PDF
document.getElementById('dye-filter-generate-pdf').onclick = function () {
  // Your html2pdf code here.
  var element = document.getElementById('dye-card-list-wrapper');
  html2pdf(element);
};

// Hide dye card on click
$('.dye-card__close-btn').click(function(){
  $(this).closest('.dye-card').remove();
  $container.isotope('layout');
  
  return false;
})
