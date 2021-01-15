function showDetail(id) {
	const content = document.querySelector("#content" + id);
	const downButton = document.querySelector("#moreDown" + id);
	const upButton = document.querySelector("#moreUp" + id);

	content.classList.toggle("hidden");
	downButton.classList.toggle("hidden");
	upButton.classList.toggle("hidden");
}

// function toggleSentenceDaily(index) {
// 	const grayDailyButton = document.querySelector("#dailyGray" + index);
// 	const colorDailyButton = document.querySelector("#dailyColor" + index);
// 	const grayGoalButton = document.querySelector("#goalGray" + index);
// 	const colorGoalButton = document.querySelector("#goalColor" + index);

// 	if (grayGoalButton.classList.contains("hidden")) {
// 		grayGoalButton.classList.toggle("hidden");
// 		colorGoalButton.classList.toggle("hidden");
// 		grayDailyButton.classList.toggle("hidden");
// 		colorDailyButton.classList.toggle("hidden");
// 	}
// }

// function toggleSentenceGoal(index) {
// 	const grayDailyButton = document.querySelector("#dailyGray" + index);
// 	const colorDailyButton = document.querySelector("#dailyColor" + index);
// 	const grayGoalButton = document.querySelector("#goalGray" + index);
// 	const colorGoalButton = document.querySelector("#goalColor" + index);

// 	if (grayDailyButton.classList.contains("hidden")) {
// 		grayGoalButton.classList.toggle("hidden");
// 		colorGoalButton.classList.toggle("hidden");
// 		grayDailyButton.classList.toggle("hidden");
// 		colorDailyButton.classList.toggle("hidden");
// 	}
// }

// function toggleSentence(index, sentence) {
// 	const grayButton = document.querySelector("#sentenceGray" + index);
// 	const colorButton = document.querySelector("#sentenceColor" + index);
// 	const importantLabel = document.querySelector("#importantLabel" + index);
// 	const titleInput = document.querySelector("#titleInput" + index);
// 	const contentInput = document.querySelector("#contentInput" + index);
// 	const detailBox = document.querySelector("#detailBox" + index);
// 	const titleBox = document.querySelector("#titleBox" + index);
// 	const detailButton = document.querySelector("#contentButton" + index);
// 	const sentenceButtons = document.querySelector("#sentenceButtons" + index);
// 	const editSentenceButton = document.querySelector(
// 		"#editSentenceButton" + index
// 	);
// 	const idInput = document.querySelector("#idInput" + index);

// 	grayButton.classList.toggle("hidden");
// 	colorButton.classList.toggle("hidden");
// 	importantLabel.classList.toggle("hidden");
// 	titleBox.classList.toggle("hidden");
// 	detailButton.classList.toggle("hidden");
// 	contentInput.classList.toggle("sentence");
// 	detailBox.classList.toggle("sentence");
// 	sentenceButtons.classList.toggle("hidden");

// 	if (sentence !== undefined) {
// 		contentInput.value = sentence.content;
// 		idInput.value = sentence._id;
// 		editSentenceButton.classList.toggle("hidden");
// 	}

// 	if (titleBox.classList.contains("hidden")) {
// 		titleInput.required = false;
// 		contentInput.required = true;
// 		contentInput.placeholder = "명언이나 목표를 작성해주세요.";
// 	} else {
// 		titleInput.required = true;
// 		contentInput.required = false;
// 		contentInput.value = "";
// 		idInput.value = "";
// 		contentInput.placeholder = "상세 내용을 입력해주세요.";
// 	}
// }

// function toggleImportant(index) {
// 	const grayButton = document.querySelector("#importantGray" + index);
// 	const colorButton = document.querySelector("#importantColor" + index);

// 	grayButton.classList.toggle("hidden");
// 	colorButton.classList.toggle("hidden");
// }

function slidePlanDetail(index) {
	const titleBox = document.querySelector("#titleBox" + index);
	const detailBox = document.querySelector("#detailBox" + index);
	const upImage = document.querySelector("#upImage" + index);
	const downImage = document.querySelector("#downImage" + index);

	titleBox.classList.toggle("active");
	detailBox.classList.toggle("active");
	upImage.classList.toggle("hidden");
	downImage.classList.toggle("hidden");
}

// function editPlan(index, plans) {
// 	// 수정 버튼 클릭 시 작동
// 	const titleBox = document.querySelector("#titleBox" + index);
// 	const addBtn = document.querySelector("#addButton" + index);
// 	const editBtn = document.querySelector("#editButton" + index);
// 	const titleInput = document.querySelector("#titleInput" + index);
// 	const contentInput = document.querySelector("#contentInput" + index);
// 	const detailBox = document.querySelector("#detailBox" + index);
// 	const importantRadio = document.querySelector("#important" + index);
// 	const idInput = document.querySelector("#idInput" + index);
// 	const grayButton = document.querySelector("#importantGray" + index);
// 	const graySentenceButton = document.querySelector("#sentenceGray" + index);
// 	const colorSentenceButton = document.querySelector("#sentenceColor" + index);
// 	const sentenceButtons = document.querySelector("#sentenceButtons" + index);
// 	const editSentenceButton = document.querySelector(
// 		"#editSentenceButton" + index
// 	);
// 	const contentButton = document.querySelector("#contentButton" + index);

// 	if (idInput.value === "" || idInput.value !== plans.id) {
// 		// 수정 버튼을 처음 클릭하거나 수정하려던 할 일이 아닌 일의 수정 버튼을 다시 클릭
// 		addBtn.disabled = true;
// 		if (!detailBox.classList.contains("active")) slidePlanDetail(index);
// 		if (idInput.value === "") editBtn.classList.toggle("hidden");
// 		if (graySentenceButton.classList.contains("hidden")) {
// 			titleBox.classList.toggle("hidden");
// 			editSentenceButton.classList.toggle("hidden");
// 			contentButton.classList.toggle("hidden");
// 			// sentenceButtons.classList.toggle("hidden");
// 			// graySentenceButton.classList.toggle("hidden");
// 			// colorSentenceButton.classList.toggle("hidden");
// 			// importantRadio.classList.toggle("hidden");
// 		}
// 		titleInput.value = plans.title;
// 		contentInput.value = plans.content;
// 		if (plans.important === "on") {
// 			if (importantRadio.checked === false) importantRadio.checked = true;
// 			if (!grayButton.classList.contains("hidden")) toggleImportant(index);
// 		} else {
// 			if (importantRadio.checked === true) {
// 				importantRadio.checked = false;
// 				if (grayButton.classList.contains("hidden")) toggleImportant(index);
// 			}
// 			// else {
// 			// 	if (grayButton.classList.contains("hidden"))
// 			// 		grayButton.classList.toggle("hidden");
// 			// }
// 		}
// 		idInput.value = plans.id;
// 	} else if (idInput.value === plans.id) {
// 		// 같은 할 일의 수정 버튼을 다시 클릭
// 		addBtn.disabled = false;
// 		if (detailBox.classList.contains("active")) {
// 			titleInput.value = "";
// 			contentInput.value = "";
// 			importantRadio.checked = false;
// 			idInput.value = "";
// 			editBtn.classList.toggle("hidden");
// 			if (plans.important === "on") plans.important = "off";
// 			if (grayButton.classList.contains("hidden")) toggleImportant(index);
// 		}
// 		slidePlanDetail(index);
// 	}
// }

function loadImportant(i) {
	const important = document.querySelector("#important" + i);
	const grayButton = document.querySelector("#importantGray" + i);
	const colorButton = document.querySelector("#importantColor" + i);

	if (important.value === "true") {
		important.checked = true;
		grayButton.classList.add("hidden");
		colorButton.classList.remove("hidden");
	} else {
		important.checked = false;
		grayButton.classList.remove("hidden");
		colorButton.classList.add("hidden");
	}
}

function resetForm(i) {
	const title = document.querySelector("#titleInput" + i);
	const content = document.querySelector("#contentInput" + i);
	const important = document.querySelector("#important" + i);
	const planId = document.querySelector("#idInput" + i);

	title.value = "";
	content.value = "";
	important.value = false;
	planId.value = "";

	loadImportant(i);
}

function updateImportant(i) {
	const important = document.querySelector("#important" + i);
	const grayButton = document.querySelector("#importantGray" + i);
	const colorButton = document.querySelector("#importantColor" + i);

	if (important.checked === true) {
		important.value = false;
		grayButton.classList.remove("hidden");
		colorButton.classList.add("hidden");
	} else {
		important.value = true;
		grayButton.classList.add("hidden");
		colorButton.classList.remove("hidden");
	}
}

function loadPlan(i, plan) {
	// 슬라이드가 내려가 있을 때, 올라가 있을 때 > 무조건 올라오게
	// content가 있을 때, 없을 때 > 똑같이 값을 가져오면 됨
	const title = document.querySelector("#titleInput" + i);
	const content = document.querySelector("#contentInput" + i);
	const important = document.querySelector("#important" + i);
	const planId = document.querySelector("#idInput" + i);

	title.value = plan.title;
	content.value = plan.content;
	planId.value = plan.id;
	important.value = plan.important;
	loadImportant(i);
}

function clickEdit(i, plan) {
	const downButton = document.querySelector("#downImage" + i);
	const planId = document.querySelector("#idInput" + i);

	if (downButton.classList.contains("hidden")) {
		slidePlanDetail(i);
		loadPlan(i, plan);
	} else {
		if (planId.value === plan.id) {
			slidePlanDetail(i);
			resetForm(i);
		} else {
			loadPlan(i, plan);
		}
	}
}

var Slider = function (id, _web, _tab, _mobile, spacing) {
	let containerWidth = 0;
	let sliderItemWidth = 0;
	let totalCount = 0;
	var spacing = spacing || 10;
	let display = _web;
	let left = 0;
	let interval;
	const pagination = document.querySelector(".pagination");

	var DOM = {
		container: function (id) {
			const dom = document.querySelector("#" + id);

			return dom;
		},

		slider: function (container) {
			const dom = document.createElement("div");
			totalCount = container.children.length;

			dom.className = "slider";
			dom.style.position = "relative";
			dom.style.overflow = "hidden";
			dom.style.left = 0;
			dom.style.transition = "left .5s";

			return dom;
		},
	};

	// DOM 만들기
	const container = DOM.container(id);
	const slider = DOM.slider(container);
	const temp = container.innerHTML;
	container.innerHTML = "";
	slider.innerHTML = temp;
	container.appendChild(slider);
	const items = document.querySelector("#" + id + " .slider").children;

	for (let i = 0; i < items.length; i++) {
		items[i].style.float = "left";
		items[i].style.width = sliderItemWidth - spacing + "px";
		items[i].style["margin-right"] = spacing + "px"; // 간격
	}

	// 화면 사이즈 수정시 발생하는 이벤트
	function resize() {
		left = 0;
		document.querySelector("#" + id + " .slider").style.left = left + "px";
		const innerWidth = window.innerWidth;

		if (innerWidth >= 1400) {
			setDisplayCount(_web);
		} else if (innerWidth < 1400 && innerWidth >= 768) {
			setDisplayCount(_tab);
		} else if (innerWidth < 768) {
			setDisplayCount(_mobile);
		}
	}

	// 디스플레이 갯수 설정 함수
	function setDisplayCount(count) {
		display = count;

		containerWidth = container.offsetWidth + spacing;
		sliderItemWidth = containerWidth / display;

		// if (display > 1) {
		document.querySelector("#" + id + " .slider").style.width =
			totalCount * sliderItemWidth + spacing * totalCount + "px";
		// } else {
		// 	document.querySelector("#" + id + " .slider").style.width = 480 + "px";
		// }
		const items = document.querySelector("#" + id + " .slider").children;
		const dayItem = document.querySelector(".day__item");

		if (display === 1) {
			dayItem.classList.add("mobile");
		} else {
			// for (let i = 0; i < items.length; i++) {
			// 	items[i].style.width = sliderItemWidth - spacing + "px";
			// }
			dayItem.classList.remove("mobile");
		}
	}

	// 반응형 디스플레이 갯수 조절
	const isResponsive = _tab != undefined && _mobile != undefined;

	if (isResponsive) {
		window.onresize = resize;
	}

	resize();

	return {
		setDisplayCount: setDisplayCount,
		move: function (index) {
			left = -1 * sliderItemWidth * index;
			document.querySelector("#" + id + " .slider").style.left = left + "px";
		},

		prev: function () {
			left += sliderItemWidth;
			const limit = 0;

			if (left > limit) {
				left = limit;
			}
			document.querySelector("#" + id + " .slider").style.left = left + "px";
		},

		next: function () {
			left -= sliderItemWidth;
			const limit = -1 * sliderItemWidth * (totalCount - display);

			if (left < limit) {
				left = limit;
			}
			document.querySelector("#" + id + " .slider").style.left = left + "px";
		},

		auto: function () {
			clearInterval(interval);
			interval = setInterval(function () {
				left -= sliderItemWidth;
				const limit = -1 * sliderItemWidth * (totalCount - display);

				if (left < limit) {
					left = 0;
				}
				document.querySelector("#" + id + " .slider").style.left = left + "px";
			}, 2000);
		},

		stop: function () {
			clearInterval(interval);
		},
	};
};

function init() {
	const slider = new Slider("slider", 3, 2, 1, 40);
	const next__btn = document.querySelector(".next__btn");
	const prev__btn = document.querySelector(".prev__btn");

	prev__btn.addEventListener("click", slider.prev);
	next__btn.addEventListener("click", slider.next);
	window.clickEdit = clickEdit;
	window.slidePlanDetail = slidePlanDetail;
	window.updateImportant = updateImportant;
	window.showDetail = showDetail;
}

init();
