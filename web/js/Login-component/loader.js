define(['ojs/ojcore', 'text!./login-component.html', './login-component', 'text!./login-component.json', 'css!./login-component.css', 'ojs/ojcomposite'], function (oj, view, viewModel, metadata) {
        oj.Composite.register('login-component', {
            view: {inline: view},
            viewModel: {inline: viewModel},
            metadata: {inline: JSON.parse(metadata)}
    });
    }
);
