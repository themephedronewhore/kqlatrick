// modal window code removed; only menu toggle remains

document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelectorAll('[data-target]');
    const panels = document.querySelectorAll('.menu-panel');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.target;
            const targetPanel = document.getElementById(targetId);

            panels.forEach(panel => {
                if (panel !== targetPanel) {
                    panel.classList.remove('active');
                }
            });

            targetPanel.classList.toggle('active');
        });
    });

    document.querySelectorAll('.menu-panel a').forEach(link => {
        link.addEventListener('click', () => {
            panels.forEach(panel => panel.classList.remove('active'));
        });
    });

});
