const webDevelopment = "webDev";
const digitalMarketing = "digMark";

// page animations
const animate = (classes) => {
  // function is defined within the preload function starting on line 50
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      // console.log(entry.target);
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        // entry.setAttribute('style', 'border: solid white 1px')
        observer.unobserve(entry.target);
      }
    });
  });
  observer.observe(classes);
};

const appearOptions = {
  root: null,
  threshold: 2,
  rootMargin: "0px",
  // rootPadding: "-100px"
};

let url = window.location.protocol + "//" + window.location.hostname;
if (
  window.location.port != "" ||
  window.location.port != null ||
  window.location.port != undefined
) {
  url += ":" + window.location.port;
}
console.log(url);

const addImage = (imageContainerTag, src) => {
  let image = document.createElement("img");
  let imageContainer = document.querySelector(imageContainerTag);
  image.src = url + src;
  imageContainer.appendChild(image);
  console.log(image);
  console.log(image.src);
  console.log(imageContainer);
};

window.addEventListener("load", () => {
  addImage("#loadpic", "/assets/images/grifflogobold.png");
  addImage("#loadgif", "/assets/images/sideflip-copy.gif");
  setTimeout(() => {
    document.querySelector("#loadpic").classList.add("hide");
    document.querySelector("#loadgif").classList.add("hide");
    document.querySelectorAll(".box").forEach((box) => {
      box.classList.add("after");
    });
    setTimeout(() => {
      document.querySelector("#load-wrap").classList.add("hide");
    }, 1100);

  document.querySelectorAll(".fade-in").forEach((fader) => {
    animate(fader);
  });

  document.querySelectorAll(".slide-in").forEach((slider) => {
    animate(slider);
  });

  document.querySelectorAll(".roll-in").forEach((roll) => {
    animate(roll);
  });

  document.querySelectorAll(".blueliquid2").forEach((change) => {
    animate(change);
  });

  document.querySelectorAll(".color-flicker").forEach((change) => {
    animate(change);
  });
}, 1100);
});

let loadBoxes = [];
const loadBoxContainer = document.querySelector(".load-box-container");

loadBoxes.push('<div class="box"></div>'.repeat(100));

console.log(loadBoxes);

loadBoxContainer.innerHTML = loadBoxes;

let setHTML = (query, data) => {
  document.querySelector(query).innerHTML = data;
};

// const mapContent = (content, selector) => {
//     content.map(
//       (data) =>
//         (selector.innerHTML += `
//     <div class="skill">
//         <h4>${data.skill}</h4>
//         </div>
//       `)
//     );
//     document.querySelectorAll(".info-box").forEach((element) => {
//       animate(element);
//     });
//   };

const mapSkills = (content, selector) => {
  selector.innerHTML = '',
  content.map(
    (data) =>
      (
        selector.innerHTML += `
      <div class="skill color-flicker">
          <h4>${data.skill}</h4>
          </div>
        `)
  );
  document.querySelectorAll(".skill").forEach((element) => {
    animate(element);
  });
};

const mapProfessions = (content, selector) => {
  selector.innerHTML = '',
  content.map(
    (data) =>
      (selector.innerHTML += `
          <h4 class='slide-in'>${data.title}</h4>
        `)
  );
  document.querySelectorAll('.things-i-can-do h4:nth-child(odd)').forEach(
    thing => {
      thing.classList.add('left')
    }
  )
  document.querySelectorAll('.things-i-can-do h4:nth-child(even)').forEach(
    thing => {
      thing.classList.add('right')
    }
  )
  document.querySelectorAll(".things-i-can-do h4").forEach((element) => {
    animate(element);
  });
};

const mapSpecialties = (content, selector) => {
  selector.innerHTML = '',
  content.map(
    (data) =>
      (selector.innerHTML += `
       <div class="message-info-tab slide-in left">
          <div class="message-info-text">
            <h3>${data.name}</h3>
            <h6>${data.explanation}</h6>
          </div>
          </div>
        `)
  );
  document.querySelectorAll(".message-info-tab").forEach((element) => {
    animate(element);
  });
};

const displayProjects = (content, selector) => {
  // document.write (content.join(''));
  selector.innerHTML = '',
  content.forEach(
    (data) => 
    (selector.innerHTML += `
    <div class="project" style="background: url('${data.imageUrl}');background-position: center;background-repeat: no-repeat;background-size: cover;">
    <div class="hover-project">
      <div class="project-skills">
      ${data.skills.map(
          (skill) => (
            `<div class="skill">${skill.skill}</div>`
          )
        )
      }
      </div>
      <div class='project-btn-sec'>
      <a href="${data.websiteLink}"></a><button><ion-icon name="open-outline"></ion-icon></button>
      <a href="/"></a><button><ion-icon name="logo-github" class='social-icon'></ion-icon></button>
    </div>
    </div>
  </div>  
    `
    )
  )
  document.querySelectorAll('.project:nth-child(odd)').forEach(
    thing => {
      thing.classList.add('left')
    }
  )
  document.querySelectorAll('.project:nth-child(even)').forEach(
    thing => {
      thing.classList.add('right')
    }
  )
  document.querySelectorAll(".project").forEach((element) => {
    animate(element);
  }
  );
}

const pickService = (content) => {
  console.log(content);
  setHTML(".image-bg-text h2", content.skillName);
  setHTML(".text-box p", content.aboutParagraph);
  setHTML(".headers h3", content.header);
  setHTML(".headers h2", content.tagline);
  // page animations from the intersection observer
  mapSkills(
    content.skills, 
    document.querySelector(".skills")
  );
  mapProfessions(
    content.professions,
    document.querySelector(".things-i-can-do")
  );
  mapSpecialties(
    content.mySpecialties,
    document.querySelector(".message-info")
  );
  displayProjects(
    content.projects,
    document.querySelector('.my-projects')
  )
};

let serviceBtn = document.querySelectorAll(".service-btn");

// set specific skill's data to page
const setPageData = (chosenSkill) => {
  skillData.forEach((skill) => {
    if (chosenSkill === skill.identifyer) {
      // console.log(skill.identifyer)
      pickService(skill);
    } else {
      console.log("fuck my life");
    }
  });
};

serviceBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    [].forEach.call(serviceBtn, (btn) => {
      btn.classList.remove("selected");
    });
    window.location.href = "#about-me";
    document.querySelector('.under-section').classList.remove('hide')
    let data = e.target.closest(".hero-btn");
    if (data.id.includes(webDevelopment)) {
      chosenSkill = webDevelopment;
      // console.log(chosenSkill)
    } else if (data.id.includes(digitalMarketing)) {
      chosenSkill = digitalMarketing;
    }
    btn.classList.add("selected");
    setPageData(chosenSkill);
    // modal.className = "";
  });
});

document.querySelector('.contact-form button').addEventListener('click', (e) => {
  setTimeout(() => {
    window.location.reload()
  }, 1100);
})

