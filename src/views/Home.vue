<script setup></script>

<template>
  <div class="background">
    <!-- Optional: SVG overlay for waves -->
    <div class="flex pb-10">
      <svg
        class="svg-wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#DF61A5"
          fill-opacity="1"
          d="M0,96L80,112C160,128,320,160,480,186.7C640,213,800,235,960,234.7C1120,235,1280,213,1360,202.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </div>

    <div class="flex justify-center">
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <div class="text-5xl font-medium uppercase">Welcome to</div>
          <div
            class="text-8xl font-medium uppercase tracking-wide bg-gradient-to-r from-[#1C42C9] to-[#DF61A5] text-transparent bg-clip-text"
          >
            SIT Internship
          </div>
        </div>
        <div class="text-lg tracking-wide w-[1000px]">
          Your journey to real-world experience starts here. Our platform is
          designed to help students like you connect with companies eager to
          find fresh talent. You’ll find companies ready to welcome you as an
          intern and help you grow your skills.
        </div>

        <div class="gradient-border-container">
          <RouterLink :to="{ name: 'hirings' }">
            <a
              href="#"
              target="_blank"
              class="border-button text-lg hover:text-white hover:bg-gradient-to-r hover:from-[#1C42C9] hover:to-[#DF61A5] hover:shadow-lg hover:rounded-full"
              >Explore More</a
            >
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.border-button {
  display: inline-block;
  padding: 8px 16px; /* Adjust padding for desired button size */
  border-radius: 9999px;
  background-color: white; /* Set to match the background color */
  color: #1c42c9;
  transition: all 0.3s ease;
}

.border-button:hover {
  color: white;
}
</style>
