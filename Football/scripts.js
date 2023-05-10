let teams = [
    { code: 'DAL', name: 'Dallas Cowboys', plays: 'Arlington, TX' },
    { code: 'DEN', name: 'Denver Broncos', plays: 'Denver, CO' },
    { code: 'HOU', name: 'Houston Texans', plays: 'Houston, TX' },
    { code: 'KAN', name: 'Kansas City Chiefs', plays: 'Kansas City, MO' },
  ];
   const teamSelectorEl = document.getElementById('teamSelector');

  function playerDropDown() {
    const teamSelectorEl = document.getElementById('teamSelector');
    for (let i = 0; i < teams.length; i++) {
      let optionEl = document.createElement('option');
      const team = teams[i];
      optionEl.textContent = team.name;
      optionEl.value = team.code;
      teamSelectorEl.appendChild(optionEl);
    }
  }
  
  playerDropDown();

  function onButtonClick() {
    const teamCode = teamSelectorEl.value;
    console.log('selected value', teamCode);

    let selectedTeam;
    for (let i = 0; i < Teams.length; i++) {
    const team = teams[i];
        if (team.code === teamCode) {
            selectedTeam = team;
            break;
        }
    }
    const message = 'You selected the ${selectedTeam.name} (${selectedTeam.code)}'
    const messageEl = document.getElementById('messagep');
    messageEl.innerHTML = message;
  }

  const btn = document.getElementById('buttonInput');
  btn.onclick = onButtonClick;
