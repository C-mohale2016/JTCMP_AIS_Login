define(['ojs/ojcore', 'text!./status-component.html', './status-component', 'text!./status-component.json', 'css!./status-component.css', 'ojs/ojcomposite'], function (oj, view, viewModel, metadata) {
        oj.Composite.register('status-component', {
            view: {inline: view},
            viewModel: {inline: viewModel},
            metadata: {inline: JSON.parse(metadata)}
    });
    }   
);
