<template>
  <div class="resources-root">
    <div class="container section-card teal-bg">
        <h1 class="section-header">Resources Used</h1>
        <p>A list of assets and tools used to create this web page.</p>
        
        <table class="resource-table">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Source</th>
                    <th>Link/Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Fonts</td>
                    <td>Google Fonts</td>
                    <td>Syne & Outfit</td>
                </tr>
                <tr>
                    <td>Icons</td>
                    <td>FontAwesome</td>
                    <td>Free Brands & Solid Sets</td>
                </tr>
                <tr>
                    <td>Images</td>
                    <td>Unsplash/Local</td>
                    <td>Cat photography</td>
                </tr>
                <tr>
                    <td>Audio</td>
                    <td>Pixabay/Local</td>
                    <td>Sound effects</td>
                </tr>
            </tbody>
        </table>
        
        <div style="margin-top: 30px;">
            <button @click="$emit('close')" class="btn-black">← Back to Profile</button>
        </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped ensures these table styles ONLY apply to this page */
@import './css/personalprofile.css';

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
</style>