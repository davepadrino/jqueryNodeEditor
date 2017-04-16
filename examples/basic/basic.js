// Copyright 2012 - Malcolm Dwyer
// Distributed under MIT license
// http://opensource.org/licenses/mit-license.php/

$(document).ready(function() {
    console.log("Starting basic example for jquery.ui.nodeEditor.js");

    $('<div></div>')
        .addClass('nodeEditor')
        .appendTo('.workspace')
        .nodeEditor({
            nodes: [
                {
                    label: '5', 
                    parametros : [],                              
                    outputs: [
                        {
                            label: 'Value',
                            fn: function(inputs, properties) {
                                var d = $.Deferred();
                                d.resolve(5);
                                return d.promise();
                            }
                        }
                    ]
                },
                {
                    label: '8',
                    parametros : [],
                    outputs: [
                        {
                            label: 'Value',
                            fn: function(inputs, properties) {
                                var d = $.Deferred();
                                d.resolve(8);
                                return d.promise();
                            }
                        }
                    ]
                },
                {
                    label: 'Display',
                    parametros : [],
                    inputs: [
                        {
                            id: 'In',
                            label: 'In'
                        }
                    ],
                    //display: function(inputs, properties) {
                        //return 'In';
                    //}
                    //display: true
                    display: 'In'
                },
                {
                    label: 'Add',
                    inputs: [
                        {
                            id: 'A',
                            label: 'A'
                        },
                        {
                            id: 'B',
                            label: 'B'
                        }
                    ],
                    parametros : [],                    
                    outputs: [
                        {
                            label: 'Sum',
                            fn: function(nodeState) {
                                console.group('Sum fn()');
                                //console.log(nodeState);
                                var d = $.Deferred();
                                if (typeof nodeState === 'undefined') {
                                    console.error('Node state undefined');
                                    d.reject();
                                    console.groupEnd();
                                    return d.promise();
                                }

                                inputs = nodeState.inputs || {};
                                inputs.A = inputs.A || 0;
                                inputs.B = inputs.B || 0;

                                console.log('Sum fn() A:' + inputs.A + '  B:' + inputs.B);
                                var out = parseInt(inputs.A + inputs.B);
                                console.log('    -->  ' + out);
                                d.resolve(out);
                                console.groupEnd();
                                return d.promise();
                            }
                        }
                    ]
                },
                {
                    label: 'Subtract',
                    inputs: [
                        {
                            id: 'A',
                            label: 'A'
                        },
                        {
                            id: 'B',
                            label: 'B'
                        }
                    ],
                    parametros : [],                    
                    outputs: [
                        {
                            label: 'Difference',
                            fn: function(nodeState) {
                                console.group('Sub fn()');
                                //console.log(nodeState);
                                var d = $.Deferred();
                                if (typeof nodeState === 'undefined') {
                                    console.error('Node state undefined');
                                    d.reject();
                                    console.groupEnd();
                                    return d.promise();
                                }

                                inputs = nodeState.inputs || {};
                                inputs.A = inputs.A || 0;
                                inputs.B = inputs.B || 0;

                                console.log('Subtract fn() A:' + inputs.A + '  B:' + inputs.B);
                                var out = parseInt(inputs.A - inputs.B);
                                console.log('    -->  ' + out);
                                d.resolve(out);
                                console.groupEnd();
                                return d.promise();
                            }
                        }
                    ]
                },
                {
                    label: 'Multiply',
                    inputs: [
                        {
                            id: 'A',
                            label: 'A'
                        },
                        {
                            id: 'B',
                            label: 'B'
                        }
                    ],
                    parametros : [],                    
                    outputs: [
                        {
                            label: 'Product',
                            fn: function(nodeState) {
                                console.group('Sum fn()');
                                //console.log(nodeState);
                                var d = $.Deferred();
                                if (typeof nodeState === 'undefined') {
                                    console.error('Node state undefined');
                                    d.reject();
                                    console.groupEnd();
                                    return d.promise();
                                }

                                inputs = nodeState.inputs || {};
                                inputs.A = inputs.A || 0;
                                inputs.B = inputs.B || 0;

                                console.log('Sum fn() A:' + inputs.A + '  B:' + inputs.B);
                                var out = parseInt(inputs.A * inputs.B);
                                console.log('    -->  ' + out);
                                d.resolve(out);
                                console.groupEnd();
                                return d.promise();
                            }
                        }
                    ]
                },
                {
                    label: 'Divide',
                    inputs: [
                        {
                            id: 'A',
                            label: 'A'
                        },
                        {
                            id: 'B',
                            label: 'B'
                        }
                    ],
                    parametros : [],
                    outputs: [
                        {
                            label: 'Div',
                            fn: function(nodeState) {
                                console.group('Sum fn()');
                                //console.log(nodeState);
                                var d = $.Deferred();
                                if (typeof nodeState === 'undefined') {
                                    console.error('Node state undefined');
                                    d.reject();
                                    console.groupEnd();
                                    return d.promise();
                                }

                                inputs = nodeState.inputs || {};
                                inputs.A = inputs.A || 0;
                                inputs.B = inputs.B || 0;

                                console.log('Sum fn() A:' + inputs.A + '  B:' + inputs.B);
                                var out = parseInt(inputs.A / inputs.B);
                                console.log('    -->  ' + out);
                                d.resolve(out);
                                console.groupEnd();
                                return d.promise();
                            }
                        }
                    ]
                },     
                {
                    label: 'Custom Function',
                    inputs: [
                        {
                            id: 'A',
                            label: 'A'
                        }
                    ],
                    parametros : [
                        {
                            key: 'Param 1',
                            value : 5
                        },
                        {
                            key: 'Param 2',
                            value : 7
                        },
                        {
                            key: 'Multiple',
                            value : [
                                {
                                    name:"option 1",
                                    selected: 0,

                                },
                                {
                                    name:"option 2",
                                    selected: 0,

                                },
                                {
                                    name:"option 3",
                                    selected: 1,

                                },
                            ] 
                        }
                    ],         
                    outputs: [
                        {
                            label: 'Div',
                            fn: function(nodeState) {
                                console.group('Sum fn()');
                                //console.log(nodeState);
                                var d = $.Deferred();
                                if (typeof nodeState === 'undefined') {
                                    console.error('Node state undefined');
                                    d.reject();
                                    console.groupEnd();
                                    return d.promise();
                                }

                                inputs = nodeState.inputs || {};
                                inputs.A = inputs.A || 0;
                                inputs.B = inputs.B || 0;

                                console.log('Sum fn() A:' + inputs.A + '  B:' + inputs.B);
                                var out = parseInt(inputs.A / inputs.B);
                                console.log('    -->  ' + out);
                                d.resolve(out);
                                console.groupEnd();
                                return d.promise();
                            }
                        }
                    ]
                }
            ]
        });


    $(".ui-droppable").on('click', '#drop-node', function (e) {
        console.log("dentro del drop");
        var numberOfParentChildren = $(e.currentTarget).closest('.ui-droppable').children().length;
        var numberOfConnections = $(e.currentTarget).parent().children().length-2;
        var numberOfCurrentBox = $(e.currentTarget).parent().index()+1;
        var cont = 0;
        while (cont != numberOfConnections) {
            $(e.currentTarget).parent().nextAll('.ui-nodeEditor-wire:first').remove();
            cont++; 
        }
        $(e.currentTarget).parent().fadeOut(300, function() {
            $(this).remove();
        });
        //console.log("NextAll: "+Object.keys($(e.currentTarget).nextAll('.ui-nodeEditor-wire')));
        if ($('#Aparams').text() == $(e.currentTarget).parent().data('node').label || !$('#Aparams').text()) {
            $('#Aparams').text("");
            $('.new-elements').remove();
        }
        e.stopPropagation();
    });

    $(".ui-droppable").on('click', '.ui-nodeEditor-Node', function (e) {
        console.log("dentro del Node");
        // defining global for accesing from the next event
        currentNode = $(e.currentTarget);
        var label = currentNode.data('node').label;

        var labelOutput = currentNode.data('node').outputs[0].label;
        var parametros = currentNode.data('node').parametros;


        $('.new-elements').remove();
        $('#Aparams').text(label);

        if(parametros[0]) {
        
            $(".attrs-table")
                .append("<tr class='new-elements'><td><form class= 'form' action='' onsubmit='event.preventDefault();'></form></td></tr>");

            for(var i in parametros) {   
                name = parametros[i].key;
                value = parametros[i].value;
                if ( Array.isArray(value) ) {
                    var select = "<select id="+name+" name="+name+"/>";
                    $(".form")
                        .append("<tr class='new-elements'><td><label for="+name+">"+name+"</label><br>"+select+"</td></tr>");

                    $.each(value, function(a,b) {
                        if (b.selected == 1){
                            $(".form #"+name).append($("<option/>").attr({
                                                    "value": b.name,
                                                    "selected": true
                                                }).text(b.name));
                        } else {
                            $(".form #"+name).append($("<option/>").attr("value", b.name).text(b.name));
                        }
                        
                    });       

                } else {
                    var input = "<input type='text' name="+name+" value="+value+">";                    
                    $(".form")
                        .append("<tr class='new-elements'><td><label for="+name+">"+name+"</label><br>"+input+"</td></tr>");
                }
            }
            $(".form").append("<br><input type='submit' id='submit' value='Update params'>");
        } else {
            $(".attrs-table")
                .append("<tr class='new-elements'><td>Do not have any params</td></tr>");

        }
    });

    $(".attrs-table").on('click', '#submit', function (e) {
        var i = 0 ;
        var parametros = currentNode.data('node').parametros;
        var node = currentNode.data('node');
        var json = JSON.stringify(node);
        var node = JSON.parse(json);
        $(".new-elements input, .new-elements select").each(function() {
            value = $( this ).val();
            name = $( this ).attr("name");
            if(value != "Update params"){
                if ($( this).attr('type') != 'text') {
                    for (var j in node.parametros[i].value) {
                        node.parametros[i].value[j].selected = 0;
                        if ( node.parametros[i].value[j].name == value ) {
                            node.parametros[i].value[j].selected = 1;
                        }
                    }
                } else {
                    node.parametros[i].value = value;
                }
            }
            i++;
        });
        currentNode.data('node',node);
    });

});
