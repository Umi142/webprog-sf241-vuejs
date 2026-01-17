<template>
  <div class="personal-profile-root">
    
    <nav id="navbar">
        <div class="nav-container">
            <a href="#" class="logo" @click.prevent="showResources = false">MEOWDY<span>.</span>COM</a>
            <ul class="nav-links">
                <li><a href="#home" @click="showResources = false">Home</a></li>
                <li><a href="#about" @click="showResources = false">About</a></li>
                <li><a href="#experience" @click="showResources = false">Skills</a></li>
                <li><a href="#gallery" @click="showResources = false">Cats</a></li>
                <li><a href="#" @click.prevent="showResources = true">Resources</a></li>
            </ul>
        </div>
    </nav>

    <div v-if="!showResources">
        
        <header id="home" class="hero">
            <div class="hero-content">
                <h1>PERSONAL PROFILE<br>WEB PAGE</h1>
                <p><br></p>
                <a href="#gallery" class="btn-black">MEET MY CATS</a>
            </div>
            <div class="overlap-img">
                <img src="/Images/gempy.jpg" alt="Featured Cat">
            </div>
        </header>

        <div class="ticker-wrap">
            <div class="ticker">
                <span>MEOW • MEOW • MEOW • MEOW • MEOW • </span>
                <span>MEOW • MEOW • MEOW • MEOW • MEOW • </span>
            </div>
        </div>

        <main class="container">
            <section id="about" class="section-card lime-bg">
                <h2 style="font-size:250%; margin-bottom:30px;">About Me</h2>
                <p style="font-size:180%;">Hi! I’m <strong>Yumilka Gutierrez</strong>, a Computer Science student who loves cats.</p>
            </section>

            <section id="experience">
                <h2 class="section-header">IT Experience</h2>
                <div class="grid-layout">
                    <div class="card purple-bg"><i class="fab fa-python"></i> <h3>Python</h3></div>
                    <div class="card teal-bg"><i class="fab fa-linux"></i> <h3>Linux</h3></div>
                    <div class="card lime-bg"><i class="fas fa-network-wired"></i> <h3>Cisco</h3></div>
                    <div class="card black-bg"><i class="fas fa-database"></i> <h3>MySQL</h3></div>
                </div>
            </section>

            <section id="gallery">
                <h2 class="section-header">The Cat Gallery</h2>
                <div class="cat-grid">
                    <div class="cat-box" v-for="(cat, index) in cats" :key="index" @click="playMeow">
                        <img :src="cat.path" :alt="cat.name">
                    </div>
                </div>
            </section>

            <section id="guestbook-section" class="container">
                <div class="section-card purple-bg">
                    <h2 class="section-header">🐾 The Meow-Guestbook</h2>
                    <form @submit.prevent="addComment" class="comment-form">
                        <input v-model="form.name" type="text" placeholder="Your Human Name" required>
                        <select v-model="form.mood" required>
                            <option value="" disabled>What is your Cat-itude?</option>
                            <option value="Sleepy">💤 Sleepy</option>
                            <option value="Zoomies">⚡ Zoomies</option>
                            <option value="Grumpy">😾 Grumpy</option>
                            <option value="Purr-fect">😸 Purr-fect</option>
                        </select>
                        <div class="rating-box">
                            <label>Rate my Gallery: </label>
                            <input type="number" v-model.number="form.rating" min="1" max="5"> Paws 🐾
                        </div>
                        <textarea v-model="form.text" placeholder="Leave a meow-ssage..." required></textarea>
                        <button type="submit" class="btn-black submit-btn">Submit Meow-ssage</button>
                    </form>

                    <hr style="margin: 40px 0; border: 1px solid black; opacity: 0.3;">

                    <div class="comments-list">
                        <h3 style="margin-bottom: 20px; font-family: 'Syne', sans-serif;">Wall of Meows:</h3>
                        <div v-for="(item, index) in comments" :key="index" class="comment-item">
                            <div class="comment-header">
                                <span class="comment-name">👤 {{ item.name }}</span>
                                <span class="comment-mood-tag">{{ item.mood }}</span>
                            </div>
                            <p class="comment-body">"{{ item.text }}"</p>
                            <div class="comment-footer">
                                <span>{{ '🐾'.repeat(item.rating) }}</span>
                                <small>{{ item.date }}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <p>&copy; 2026 YPG | <a href="#" @click.prevent="showResources = true">Resources</a></p>
            </footer>
        </main>
    </div> <personal-resources v-else @close="showResources = false" />

    <button v-show="showBackToTop" @click="scrollToTop" id="backToTop">
      <i class="fas fa-arrow-up"></i>
    </button>

  </div>
</template>

<script>
import PersonalResources from './PersonalResources.vue';

export default {
  name: 'PersonalProfile',
  components: { 
    PersonalResources 
  },
  data() {
    return {
      showResources: false,
      showBackToTop: false,
      clickSound: new Audio('/Sound/laugh.mp3'),
      cats: [
        { name: 'Garfield', path: '/Images/garfield.jpeg' },
        { name: 'Mutya', path: '/Images/mutya.jpg' },
        { name: 'Keratin', path: '/Images/keratin.jpg' },
        { name: 'Gampy', path: '/Images/gampy.jpg' },
        { name: 'Gem', path: '/Images/gem.jpg' },
        { name: 'Heart', path: '/Images/heart.jpg' }
      ],
      form: { name: '', mood: '', rating: 5, text: '' },
      comments: []
    }
  },
  methods: {
    playMeow() {
      this.clickSound.currentTime = 0;
      this.clickSound.play();
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    handleScroll() {
      this.showBackToTop = window.scrollY > 300;
    },
    addComment() {
      const now = new Date();
      const timeString = now.toLocaleDateString() + ' ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
      this.comments.unshift({
        ...this.form,
        date: timeString
      });

      // Reset form
      this.form = { name: '', mood: '', rating: 5, text: '' };
      this.playMeow();
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style>
/*fonts*/
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&family=Outfit:wght@400;600&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

/* personal CSS */
@import '@/components/css/personalprofile.css';

.personal-profile-root {
  text-align: left;
  font-family: 'Outfit', sans-serif;
  background-color: white;
}
</style>