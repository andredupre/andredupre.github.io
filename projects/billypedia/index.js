/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        $('#section-quotes').prependTo('#sections');
        $("<ol>").appendTo(".sidebar");
        
        // uncomment this to inspect all available data; delete when done //
        // console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        
        let topRated = data.discography.topRated;
        // _.forEach(topRated, function(recording, i) {
        //     console.log(recording);
        //     var $recording = $('<li>');
        //     $recording.addClass('top-rated');
        //     $recording.attr('id', i);
        //     console.log($recording);
        //     var title = recording.title;
        //     $recording.text(title);
        //     $('#list-top-rated').append($recording);
        // });
        
        // start at #list-top-rated
        // add li tags
        // add titles to li tags
        // we have access at data.discography.topRated
        
        // loop over topRated array
        // create li tag
        // add topRated titles to a li tag
        // append li tags to #list-top-rated
        
        _.forEach(topRated, function(recording, i, a) {
            var $li = $('<li>');
            $li.attr('class', "top-rated-click-list");
            $li.text(recording.title);
            $li.attr('id', i);
            $('#list-top-rated').append($li);
            //$li.appendTo($('#list-top-rated'));
        });
        
        
        
        // TODO 5
        
        let $generalHeader = 
            $("<h2>")
            .attr("id", "general-header")
            .text("Recordings")
            
        let $sectionGeneral =
            $("<section>")
            .attr("id", "section-general")
            
        let $general = 
            $('<general-recordings>')
            .attr('ul', 'general-recordings');
        
        let $artDiv =
            $("<div>")
            .attr("id", "image-container-recording")
            .attr("class", "image-container")
        
        $sectionGeneral.append($generalHeader).append($artDiv).append($general).appendTo("#sidebar")
        
        let generalRecordings = data.discography.recordings;
        
        _.forEach(generalRecordings, function(recording, i, a) {
            var $li = $('<li>');
            $li.attr('class', 'general-recording-click-list');
            $li.text(recording.title);
            $li.css("margin-left", "20px");
            $li.attr('id', i);
            $('general-recordings').append($li);
            // $li.appendTo($('#general-recordings'));
        });
        
        
        
        // TODO 6
        
        const artSelector = data.discography.recordings;
        
        const $generalArt = 
            $("<img>")
                .attr('src', artSelector[0].art)
                .attr('id', 'general-art');
                
        $generalArt.prependTo($artDiv)
                
        const topRatedArtSelector =
            data.discography.topRated
        
        let $topRated =
            $("<img>") 
                .attr("src", topRatedArtSelector[0].art)
                .attr('id', 'top-rated-art');
                
        $("#section-top-rated").prepend($("#header-top-rated")).append($topRated).append($("#list-top-rated"))
        
     
        
        // TODO 7
        
        // const pacifier = opspark.makePacifier($('#image-container-billy')[0])
        
        // $('.heading').on('click', funciton(event) {
        //     console.log(event.currentTarget.innerText);
        //     alert(event.currectTarget.innerText);
        // })
        
        // $('#header-top-rated').on('mouseenter', function() {
        //     alert('hey');
        // }
        
        // find id of element we're clicking on
        // create an event handler
        // click handler
        // loop through array of images
        // put next image into image container
        
        const images = data.images.billy;
        
        let clickCount = 0;
        
        $('#image-billy').on('click', function(event) {
            // console.log(event);
            // _.forEach(images, function(url, i, a) {
            //     console.log(url);
            //     $('#image-billy').attr('src', url);
            // });
            
            // let elem = $(event.currentTarget);
            // let i = elem.attr('i');
            // if (i > data.images.billy.length-1) {
            //     let src = data.images.billy[i++];
            //     elem.fadeOut('fast', function() {
            //         $('#image-billy').attr('src', "images/billy/billy")
            //     })
            // }
            
            clickCount += 1;
            
            let currentEvent = $(event.currentTarget);
            
            if (clickCount < images.length) {
                currentEvent.fadeOut('fast', function () {
                    $('#image-billy').attr('src', images[clickCount]);    
                }).fadeIn('fast');
            } else {
                clickCount = 0;
                currentEvent.fadeOut('fast', function () {
                    $('#image-billy').attr('src', images[clickCount]);    
                }).fadeIn('fast');
            }
        });
        
        
        
        // TODO 8
        
        $('.top-rated-click-list').on('click', function(event) {
            let currentEvent = $(event.currentTarget);
            currentEvent.fadeOut('fast', function() {
                $('#top-rated-art').attr('src', topRatedArtSelector[currentEvent.attr('id')].art);
            }).fadeIn('fast');
        })
            
        $('.general-recording-click-list').on('click', function(event) {
            let currentEvent = $(event.currentTarget);
            currentEvent.fadeOut('fast', function() {
                $('#general-art').attr('src', artSelector[currentEvent.attr('id')].art);
            }).fadeIn('fast');
        })
        
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


