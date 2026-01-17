<template>
  <div class="resources-root">
    <div class="container section-card teal-bg">
        <h1 class="section-header">Resource Credits</h1>
        <p>Documentation of all assets and tools used in this project.</p>
        
        <table class="resource-table">
            <thead>
                <tr>
                    <th>Resource Name</th>
                    <th>Purpose</th>
                    <th>Source Link</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Vue.js v3</strong></td>
                    <td>Meow-Guestbook & Survey Logic</td>
                    <td><a href="https://unpkg.com/vue@3/dist/vue.global.js" target="_blank">Vue CDN</a></td>
                </tr>
                <tr>
                    <td><strong>Wix Template #4207</strong></td>
                    <td>Visual Design Inspiration</td>
                    <td><a href="https://www.wix.com/website/templates" target="_blank">Wix Templates</a></td>
                </tr>
                <tr>
                    <td><strong>Google Fonts</strong></td>
                    <td>Typography (Syne & Outfit)</td>
                    <td><a href="https://fonts.google.com/" target="_blank">Google Fonts</a></td>
                </tr>
                <tr>
                    <td><strong>FontAwesome v6</strong></td>
                    <td>UI Icons & Navigation</td>
                    <td><a href="https://fontawesome.com/" target="_blank">FontAwesome</a></td>
                </tr>
                <tr>
                    <td><strong>laugh.mp3</strong></td>
                    <td>Interactive Gallery Sound</td>
                    <td><a href="https://youtu.be/GTXUWhmjCog?si=x_A8d9KQ5RI3grv_" target="_blank">YTSFX</a></td>
                </tr>
                <tr>
                    <td><strong>Google Gemini</strong></td>
                    <td>AI Code Structure & Logic</td>
                    <td><a href="https://gemini.google.com" target="_blank">AI Assistant</a></td>
                </tr>
            </tbody>
        </table>

        <div class="validation-notes">
            <h3 class="notes-title">✔️ Validation & Technical Notes</h3>
            <p class="notes-text">
                <strong>HTML Validator:</strong> The errors/warnings regarding attributes like <code>@submit.prevent</code>, <code>v-model</code>, and <code>:key</code> are caused by the <strong>Vue.js (Requirement #13)</strong> framework. These are custom directives necessary for the Guestbook's interactivity and are recognized by modern browsers.
            </p>
            <p class="notes-text">
                <strong>CSS Validator:</strong> The stylesheet is fully compliant with CSS3 standards.
            </p>
        </div>
        
        <div style="margin-top: 30px;">
            <button @click="$emit('close')" class="btn-black">Return Home</button>
        </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/components/css/personalprofile.css';

.resources-root {
    padding: 50px 20px;
    text-align: left;
}

.resource-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 25px;
    background: white;
    color: black;
    border: 3px solid black;
    border-radius: 15px;
    overflow: hidden;
}

.resource-table th, .resource-table td {
    padding: 15px;
    border: 1px solid #ddd;
    text-align: left;
}

.resource-table th {
    background-color: black;
    color: white;
    font-family: 'Syne', sans-serif;
    text-transform: uppercase;
}

.validation-notes {
    margin-top: 30px;
    text-align: left;
    background: rgba(255, 255, 255, 0.2);
    padding: 20px;
    border-radius: 15px;
    border: 3px solid black;
}

.notes-title {
    font-family: 'Syne', sans-serif;
    font-size: 1.3rem;
    text-transform: uppercase;
}

.notes-text {
    margin: 15px 0;
    font-size: 0.95rem;
    line-height: 1.4;
}
</style>