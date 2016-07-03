$(function() {
    $(".select2Normal").select2({
        placeholder: $(this).data('placeholder'),
        minimumResultsForSearch: Infinity,
        language: "vi"
    }).on('select2-open', function() {

        // however much room you determine you need to prevent jumping
        var requireHeight = 600;
        var viewportBottom = $(window).scrollTop() + $(window).height();

        // figure out if we need to make changes
        if (viewportBottom < requireHeight)
        {
            // determine how much padding we should add (via marginBottom)
            var marginBottom = requireHeight - viewportBottom;

            // adding padding so we can scroll down
            $(".aLwrElmntOrCntntWrppr").css("marginBottom", marginBottom + "px");

           
        }
    });

    $(".select2Search").select2({
        placeholder: $(this).data('placeholder'),
        language: "vi"
    })
});




/*
$(function() {
    $('.select-custom-nosearch').select2({
        placeholder: $(this).data('placeholder'),
        minimumResultsForSearch: Infinity
    });

    $('.select-custom').select2({
        placeholder: $(this).data('placeholder')
    });
})


!function () {

    var source = {
        // Only show 10 results at once
        limit: 10,

        // Function to fetch result list and then find a result;
        source: function (query, sync, async) {
            query = query.toLowerCase();

            $.getJSON('../listItem.json', function (data, status) {
                async(data.filter(function (elem, i, arr) {
                    var name = elem.name.toLowerCase();
                    var terms = [name, name.replace('-', '')].concat(elem.tags || []);
                    for (var i in terms) if (terms[i].indexOf(query) > -1) return true;
                    return false;
                }));
            });
        },

        // Name to use for the search result itself
        display: function (item) {
            return item.name;
        },

        templates: {
            // HTML that renders if there are no results
            notFound: function (query) {
                return '<div class="tt-empty">Không tìm thấy kết quả cho "' + query.query + '".</div>';
            },
            // HTML that renders for each result in the list
            suggestion: function (item) {
                return '<div><span class="name">' + item.name + '</span></span> <span class="cat">' + item.category + ' </span></div>';
            }
        }
    }
// Search
    $('[data-products-search]')
        .typeahead({highlight: false}, source)
        .on('typeahead:select', function (e, sel) {
            // window.location.href = sel.link;
        });

// Auto-highlight unless it's a phone
    if (!navigator.userAgent.match(/(iP(hone|ad|od)|Android)/)) {
        $('[data-docs-search]').focus();
    }

}();*/
