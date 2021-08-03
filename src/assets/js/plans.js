function showDetail(id) {
	const content = document.querySelector("#content" + id);
	const downButton = document.querySelector("#moreDown" + id);
	const upButton = document.querySelector("#moreUp" + id);

	content.classList.toggle("hidden");
	downButton.classList.toggle("hidden");
	upButton.classList.toggle("hidden");
}

function slidePlanDetail(index) {
	const titleBox = document.querySelector("#titleBox" + index);
	const detailBox = document.querySelector("#detailBox" + index);
	const upImage = document.querySelector("#upImage" + index);
	const downImage = document.querySelector("#downImage" + index);
	const todolist = document.querySelector("#todolist" + index);

	titleBox.classList.toggle("active");
	detailBox.classList.toggle("active");
	upImage.classList.toggle("hidden");
	downImage.classList.toggle("hidden");
	todolist.classList.toggle("content");
}

function changeListHeight(type, i) {
	const todolist = document.querySelector("#todolist" + i);

	todolist.classList.remove("sentence");
	todolist.classList.remove("content");
	if (type === "title") {
	} else if (type === "sentence") {
		todolist.classList.add("sentence");
	} else if (type === "content") {
		todolist.classList.add("content");
	}
}

function changeBtn(hiddenButton, shownButton) {
	hiddenButton.classList.add("hidden");
	shownButton.classList.remove("hidden");
}

function hideButtons(i) {
	const planButtons = document.querySelector("#planButtons" + i);
	const sentences = document.querySelector("#sentenceButtons" + i);
	const sentence = document.querySelector("#sentenceButton" + i);
	const rating = document.querySelector("#rating" + i);
	const addPlan = document.querySelector("#addButton" + i);
	const editPlan = document.querySelector("#editButton" + i);
	const addComment = document.querySelector("#addCommentButton" + i);
	const editComment = document.querySelector("#editCommentButton" + i);
	const addSentence = document.querySelector("#contentButton" + i);
	const editSentence = document.querySelector("#editSentenceButton" + i);
	const deleteComment = document.querySelector("#deleteCommentButton" + i);

	planButtons.classList.add("hidden");
	sentences.classList.add("hidden");
	sentence.classList.add("hidden");
	rating.classList.add("hidden");
	addPlan.classList.add("hidden");
	editPlan.classList.add("hidden");
	addComment.classList.add("hidden");
	editComment.classList.add("hidden");
	addSentence.classList.add("hidden");
	editSentence.classList.add("hidden");
	deleteComment.classList.add("hidden");
}

function showButtons(type, i) {
	const planButtons = document.querySelector("#planButtons" + i);
	const sentences = document.querySelector("#sentenceButtons" + i);
	const sentence = document.querySelector("#sentenceButton" + i);
	const rating = document.querySelector("#rating" + i);
	const addPlan = document.querySelector("#addButton" + i);
	const editPlan = document.querySelector("#editButton" + i);
	const addComment = document.querySelector("#addCommentButton" + i);
	const editComment = document.querySelector("#editCommentButton" + i);
	const addSentence = document.querySelector("#contentButton" + i);
	const editSentence = document.querySelector("#editSentenceButton" + i);
	const deleteComment = document.querySelector("#deleteCommentButton" + i);

	if (type === "addPlan") {
		addPlan.disabled = false;
		addPlan.classList.remove("hidden");
		planButtons.classList.remove("hidden");
		sentence.classList.remove("hidden");
	} else if (type === "editPlan") {
		addPlan.disabled = true;
		editPlan.classList.remove("hidden");
		planButtons.classList.remove("hidden");
	} else if (type === "addSentence") {
		addPlan.disabled = true;
		sentences.classList.remove("hidden");
		sentence.classList.remove("hidden");
		addSentence.classList.remove("hidden");
	} else if (type === "editSentence") {
		addPlan.disabled = true;
		sentences.classList.remove("hidden");
		sentence.classList.remove("hidden");
		editSentence.classList.remove("hidden");
	} else if (type === "addFeedback") {
		addPlan.disabled = true;
		addComment.classList.remove("hidden");
		rating.classList.remove("hidden");
	} else if (type === "editFeedback") {
		addPlan.disabled = true;
		editComment.classList.remove("hidden");
		deleteComment.classList.remove("hidden");
		rating.classList.remove("hidden");
	}
}

function resetData(i) {
	const title = document.querySelector("#titleInput" + i);
	const content = document.querySelector("#contentInput" + i);
	const important = document.querySelector("#important" + i);
	const daily = document.querySelector("#senteceDaily" + i);
	const planId = document.querySelector("#idInput" + i);

	title.value = "";
	content.value = "";
	planId.value = "";
	important.value = false;
	daily.checked = true;

	clickTime("all", i);
	loadImportant(i);
}

function updateImportant(i) {
	const important = document.querySelector("#important" + i);
	const grayButton = document.querySelector("#importantGray" + i);
	const colorButton = document.querySelector("#importantColor" + i);

	if (important.checked === true) {
		important.value = false;
		changeBtn(colorButton, grayButton);
	} else {
		important.value = true;
		changeBtn(grayButton, colorButton);
	}
}

function checkRating(date, score) {
	for (let i = 1; i < score + 1; i++) {
		changeBtn(
			document.querySelector(`#starGray${date}${i}`),
			document.querySelector(`#starColor${date}${i}`)
		);
	}
	for (let i = 5; i > score; i--) {
		changeBtn(
			document.querySelector(`#starColor${date}${i}`),
			document.querySelector(`#starGray${date}${i}`)
		);
	}
}

function loadFeedback(i, feedback) {
	const title = document.querySelector("#titleInput" + i);
	const content = document.querySelector("#contentInput" + i);
	const rating1 = document.querySelector("#rating" + i + "1");
	const rating2 = document.querySelector("#rating" + i + "2");
	const rating3 = document.querySelector("#rating" + i + "3");
	const rating4 = document.querySelector("#rating" + i + "4");
	const rating5 = document.querySelector("#rating" + i + "5");

	if (feedback.title !== null) title.value = feedback.title;
	if (feedback.content !== null) content.value = feedback.content;
	if (feedback.rating == 1) rating1.checked = true;
	if (feedback.rating == 2) rating2.checked = true;
	if (feedback.rating == 3) rating3.checked = true;
	if (feedback.rating == 4) rating4.checked = true;
	if (feedback.rating == 5) rating5.checked = true;
	checkRating(i, feedback.rating);
}

function loadImportant(i) {
	const important = document.querySelector("#important" + i);
	const grayButton = document.querySelector("#importantGray" + i);
	const colorButton = document.querySelector("#importantColor" + i);

	if (important.value === "true") {
		important.checked = true;
		changeBtn(grayButton, colorButton);
	} else {
		important.checked = false;
		changeBtn(colorButton, grayButton);
	}
}

function clickTime(time, i) {
	const all = document.querySelector("#all" + i);
	const grayAll = document.querySelector("#allGray" + i);
	const colorAll = document.querySelector("#allColor" + i);
	const am = document.querySelector("#am" + i);
	const grayAm = document.querySelector("#amGray" + i);
	const colorAm = document.querySelector("#amColor" + i);
	const pm = document.querySelector("#pm" + i);
	const grayPm = document.querySelector("#pmGray" + i);
	const colorPm = document.querySelector("#pmColor" + i);

	if (time === "all" || time === undefined || time === "") {
		all.checked = true;
		changeBtn(grayAll, colorAll);
		changeBtn(colorAm, grayAm);
		changeBtn(colorPm, grayPm);
	} else if (time === "am") {
		am.checked = true;
		changeBtn(colorAll, grayAll);
		changeBtn(grayAm, colorAm);
		changeBtn(colorPm, grayPm);
	} else if (time === "pm") {
		pm.checked = true;
		changeBtn(colorAll, grayAll);
		changeBtn(colorAm, grayAm);
		changeBtn(grayPm, colorPm);
	}
}

function loadSentence(i, sentence) {
	const content = document.querySelector("#contentInput" + i);
	const sentenceId = document.querySelector("#idInput" + i);

	if (sentence.content !== null) content.value = sentence.content;
	sentenceId.value = sentence._id;
}

function loadPlan(i, plan) {
	const title = document.querySelector("#titleInput" + i);
	const content = document.querySelector("#contentInput" + i);
	const important = document.querySelector("#important" + i);
	const planId = document.querySelector("#idInput" + i);

	title.value = plan.title;
	content.value = plan.content;
	planId.value = plan.id;
	important.value = plan.important;
	loadImportant(i);
	clickTime(plan.time, i);
}

function clickDaily(i, sentence) {
	const grayDailyButton = document.querySelector("#dailyGray" + i);
	const colorDaillyButton = document.querySelector("#dailyColor" + i);
	const grayGoalButton = document.querySelector("#goalGray" + i);
	const colorGoalButton = document.querySelector("#goalColor" + i);
	const addButton = document.querySelector("#contentButton" + i);
	const editButton = document.querySelector("#editSentenceButton" + i);

	changeBtn(grayDailyButton, colorDaillyButton);
	changeBtn(colorGoalButton, grayGoalButton);
	if (sentence === undefined) changeBtn(editButton, addButton);
	else changeBtn(addButton, editButton);
	resetData(i);
	loadSentence(i, sentence);
}

function clickGoal(i) {
	const grayDailyButton = document.querySelector("#dailyGray" + i);
	const colorDaillyButton = document.querySelector("#dailyColor" + i);
	const grayGoalButton = document.querySelector("#goalGray" + i);
	const colorGoalButton = document.querySelector("#goalColor" + i);
	const addSentenceButton = document.querySelector("#contentButton" + i);
	const editSentenceButton = document.querySelector("#editSentenceButton" + i);

	changeBtn(colorDaillyButton, grayDailyButton);
	changeBtn(grayGoalButton, colorGoalButton);
	changeBtn(editSentenceButton, addSentenceButton);
	resetData(i);
}

function clickSentence(i, sentence) {
	const grayButton = document.querySelector("#sentenceGray" + i);
	const colorButton = document.querySelector("#sentenceColor" + i);
	const dailyGrayButton = document.querySelector("#dailyGray" + i);
	const dailyColorButton = document.querySelector("#dailyColor" + i);
	const goalGrayButton = document.querySelector("#goalGray" + i);
	const goalColorButton = document.querySelector("#goalColor" + i);
	const titleBox = document.querySelector("#titleBox" + i);
	const title = document.querySelector("#titleInput" + i);
	const contentInput = document.querySelector("#contentInput" + i);

	hideButtons(i);
	if (colorButton.classList.contains("hidden")) {
		changeBtn(grayButton, colorButton);
		changeBtn(dailyGrayButton, dailyColorButton);
		changeBtn(goalColorButton, goalGrayButton);
		resetData(i);
		changeListHeight("sentence", i);
		title.required = false;
		titleBox.classList.add("hidden");
		contentInput.placeholder = "명언이나 목표를 작성해주세요.";

		if (sentence === undefined) {
			showButtons("addSentence", i);
		} else {
			loadSentence(i, sentence);
			showButtons("editSentence", i);
		}
	} else {
		changeBtn(colorButton, grayButton);
		resetData(i);
		showButtons("addPlan", i);
		changeListHeight("title", i);
		title.required = true;
		titleBox.classList.remove("hidden");
		contentInput.placeholder = "상세 내용을 입력해주세요.";
	}
}

function clickFeedback(i, plan) {
	const slideDownButton = document.querySelector("#downImage" + i);
	const planId = document.querySelector("#idInput" + i);
	const titleBox = document.querySelector("#titleBox" + i);
	const title = document.querySelector("#titleInput" + i);

	if (titleBox.classList.contains("hidden")) {
		// sentence 관련 작업 중
		titleBox.classList.remove("hidden");
		clickSentence(i, null);
		changeListHeight("content", i);
	}
	hideButtons(i);
	title.required = false;
	if (slideDownButton.classList.contains("hidden")) {
		// down 버튼이 숨어있다.
		// 슬라이드가 내려가있다.
		slidePlanDetail(i);
		changeListHeight("content", i);
		title.placeholder = "피드백";

		if (plan.feedback !== undefined) {
			loadFeedback(i, plan.feedback);
			showButtons("editFeedback", i);
			planId.value = plan.id;
		} else {
			resetData(i);
			showButtons("addFeedback", i);
			planId.value = plan.id;
		}
	} else if (planId.value === plan.id) {
		// feedback 버튼 두 번 클릭
		slidePlanDetail(i);
		resetData(i);
		showButtons("addPlan", i);
		changeListHeight("title", i);
		title.placeholder = "할 일";
	} else if (plan.feedback !== undefined) {
		// feedback 처음 누르는데 내용이 있음
		loadFeedback(i, plan.feedback);
		showButtons("editFeedback", i);
		changeListHeight("content", i);
		planId.value = plan.id;
		title.placeholder = "피드백";
	} else {
		// 내용이 없으면
		showButtons("addFeedback", i);
		changeListHeight("content", i);
		planId.value = plan.id;
		title.placeholder = "피드백";
	}
}

function clickEdit(i, plan) {
	const downButton = document.querySelector("#downImage" + i);
	const planId = document.querySelector("#idInput" + i);
	const titleBox = document.querySelector("#titleBox" + i);

	hideButtons(i);
	if (titleBox.classList.contains("hidden")) {
		clickSentence(i, null);
	}
	if (downButton.classList.contains("hidden")) {
		slidePlanDetail(i);
		loadPlan(i, plan);
		showButtons("editPlan", i);
		changeListHeight("content", i);
	} else if (planId.value === plan.id) {
		slidePlanDetail(i);
		resetData(i);
		showButtons("addPlan", i);
		changeListHeight("title", i);
	} else {
		loadPlan(i, plan);
		showButtons("editPlan", i);
		changeListHeight("content", i);
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

function plansInit() {
	const slider = new Slider("slider", 3, 2, 1, 40);
	const next__btn = document.querySelector(".next__btn");
	const prev__btn = document.querySelector(".prev__btn");

	prev__btn.addEventListener("click", slider.prev);
	next__btn.addEventListener("click", slider.next);
	window.clickEdit = clickEdit;
	window.slidePlanDetail = slidePlanDetail;
	window.updateImportant = updateImportant;
	window.clickSentence = clickSentence;
	window.clickGoal = clickGoal;
	window.clickDaily = clickDaily;
	window.clickFeedback = clickFeedback;
	window.clickTime = clickTime;
	window.checkRating = checkRating;
	window.showDetail = showDetail;
}

plansInit();
