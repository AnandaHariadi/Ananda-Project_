<template>
  <div>
    <!-- Nav (global) handled in App.vue -->
    
    <!-- Hero -->
    <HeroSection />
    
    <!-- Scroll Indicator -->
    <ScrollIndicator />
    
    <!-- Story: About -->
    <StorySection 
      title="About Me"
      description="Semester 3 Informatics Engineering student at UPN Veteran Jawa Timur with GPA 3.94/4.00. Experienced in robotics (ROS, ARMADIRO), game development, startup leadership (CEO Elvanor), and digital marketing. Passionate about creating innovative tech solutions."
    />
    
    <!-- ImageText: Projects showcase -->
    <ImageText 
      title="Selected Projects"
      image="https://picsum.photos/800/1000?random=project"
      content="<p>Hands-on experience in <strong>IoT (AquaMesh)</strong>, <strong>robotics (ARMADIRO 1.0)</strong>, <strong>game development (BubbleGum)</strong>, and <strong>startup ventures (Elvanor PMW 2025)</strong>.</p><p>Proficient in Python, ROS, C#, ML frameworks, and full-stack development.</p>"
    />
    
    <!-- Projects Grid -->
    <ProjectsGrid />
    
    <!-- Experience -->
    <ExperienceTimeline />
    
    <!-- Awards -->
    <AwardsGrid />
    
    <!-- Education -->
    <EducationSection />
    
    <!-- Contact -->
    <ContactSection />
  </div>
</template>

<script setup>
// Composes all sections
</script>

