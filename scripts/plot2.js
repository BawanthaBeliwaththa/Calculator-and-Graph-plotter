
        function plotGraph() {
            const graph = document.getElementById('graph');
            graph.innerHTML = '';

            const functionInput =
                document.getElementById('functionInput').value;
            const expr = math.parse(functionInput).compile();

            const xValues = math.range(-10, 10, 0.1)._data;
            const yValues = xValues.map(x => expr.evaluate({
                x
            }));

            const trace = {
                x: xValues,
                y: yValues,
                type: 'scatter',
                mode: 'lines',
            };

            const layout = {
                xaxis: {
                    title: 'X-axis'
                },
                yaxis: {
                    title: 'Y-axis'
                },
            };

            Plotly.newPlot(graph, [trace], layout);
        }
