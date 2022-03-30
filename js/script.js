// Отслеживаем ячейки возраста, роста и веса
const age = document.querySelector("#age");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const inputText = document.querySelectorAll('input[type="text"]')

// Отслеживание кнопок подсчёта и ресета

const calcButton = document.querySelector(".form__submit-button");
const resetButton = document.querySelector(".form__reset-button");

// Отслеживание значений активности

const minimal = document.querySelector("#activity-minimal");
const low = document.querySelector("#activity-low");
const medium = document.querySelector("#activity-medium");
const high = document.querySelector("#activity-high");
const maximum = document.querySelector("#activity-maximal");

const allActivities = document.querySelectorAll('input[name="activity"]');

let activityRatio = 1.2;

// Отслеживание пола

const male = document.querySelector("#gender-male");
const female = document.querySelector("#gender-female");

const genders = document.querySelectorAll('input[name="gender"]');

let gender = "male";

// Поле результата

const resultCounter = document.querySelector(".counter__result");

let weightSupport = 0,
	weightLoss = 0,
	weightGain = 0;

const caloriesNorm = document.querySelector("#calories-norm");
const caloriesMinimal = document.querySelector("#calories-minimal");
const caloriesMaximal = document.querySelector("#calories-maximal");



// Дебаг ячеек 

inputText.forEach(input => {
	input.addEventListener("change", event => {
		// Разблокировка кнопки ресета

		if (age.value != 0 || height.value != 0 || weight.value != 0) {
			resetButton.disabled = false;
		} else {
			resetButton.disabled = true;
		}

		// Разблокировка кнопки подсчёта

		if (age.value != 0 && height.value != 0 && weight.value != 0) {
			calcButton.disabled = false;
		} else {
			calcButton.disabled = true;
		}

	})
})

// Работа с полом

genders.forEach(genderName => {
	genderName.addEventListener("change", event => {

		if (genderName.value == "male") {
			gender = "male"
		} else if (genderName.value == "female") {
			gender = "female"
		}
	})
})



// Работа с активностями

allActivities.forEach(activity => {
	activity.addEventListener("change", event => {
		// Оценка активности

		if (activity.id == "activity-minimal") {
			activityRatio = 1.2;
		} else if (activity.id == "activity-low") {
			activityRatio = 1.375;
		} else if (activity.id == "activity-medium") {
			activityRatio = 1.55;
		} else if (activity.id == "activity-high") {
			activityRatio = 1.725;
		} else if (activity.id == "activity-maximal") {
			activityRatio = 1.9;
		}

	})
})

// Работа с рассчётом

calcButton.addEventListener("click", event => {
	resultCounter.classList.remove("counter__result--hidden");
	
	if (gender == "male") {
		weightSupport = ((10 * weight.value) + (6.25 * height.value) - (5 * age.value) + 5) * activityRatio;
	} else if (gender == "female") {
		weightSupport = ((10 * weight.value) + (6.25 * height.value) - (5 * age.value) - 161) * activityRatio;
	}
	weightLoss = weightSupport - (weightSupport * 0,15);
	weightGain = weightSupport + (weightSupport * 0,15);

	caloriesNorm.textContent = Math.round(weightSupport);
	caloriesMinimal.textContent = Math.round(weightLoss);
	caloriesMaximal.textContent = Math.round(weightGain);
})

// Кнопка ресета

resetButton.addEventListener("click", event => {
	activityRatio = 1.2;
	age.value = 0;
	weight.value = 0;
	height.value = 0;
	gender = "male";
	calcButton.disabled = true;
	resultCounter.classList.add("counter__result--hidden");
})