// Dialog loader utility
export async function loadDialogs() {
    try {
        // Load help dialog
        const helpResponse = await fetch('dialogs/help-dialog.html');
        const helpHtml = await helpResponse.text();
        
        // Load stats dialog
        const statsResponse = await fetch('dialogs/stats-dialog.html');
        const statsHtml = await statsResponse.text();
        
        // Insert dialogs into the DOM
        document.body.insertAdjacentHTML('beforeend', helpHtml);
        document.body.insertAdjacentHTML('beforeend', statsHtml);
        
        console.log('Dialogs loaded successfully');
    } catch (error) {
        console.error('Error loading dialogs:', error);
    }
}