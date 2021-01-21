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

	titleBox.classList.toggle("active");
	detailBox.classList.toggle("active");
	upImage.classList.toggle("hidden");
	downImage.classList.toggle("hidden");
}

function changeBtn(hiddenButton, shownButton) {
	hiddenButton.classList.add("hidden");
	shownButton.classList.remove("hidden");
}

function hideButtons(i) {
	const important = document.querySelector("#importantButton" + i);
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

	important.classList.add("hidden");
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
	const important = document.querySelector("#importantButton" + i);
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
		important.classList.remove("hidden");
		sentence.classList.remove("hidden");
	} else if (type === "editPlan") {
		addPlan.disabled = true;
		editPlan.classList.remove("hidden");
		important.classList.remove("hidden");
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
	important.value = false;
	daily.checked = true;
	planId.value = "";

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

function loadSentence(i, sentence) {
	const content = document.querySelector("#contentInput" + i);
	const sentenceId = document.querySelector("#idInput" + i);

	if (sentence.content !== null) content.value = sentence.content;
	sentenceId.value = sentence._id;
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
	const sentenceButtons = document.querySelector("#sentenceButtons" + i);
	const dailyGrayButton = document.querySelector("#dailyGray" + i);
	const dailyColorButton = document.querySelector("#dailyColor" + i);
	const goalGrayButton = document.querySelector("#goalGray" + i);
	const goalColorButton = document.querySelector("#goalColor" + i);
	const importantButton = document.querySelector("#importantButton" + i);
	const addSentenceButton = document.querySelector("#contentButton" + i);
	const editSentenceButton = document.querySelector("#editSentenceButton" + i);
	const titleBox = document.querySelector("#titleBox" + i);
	const title = document.querySelector("#titleInput" + i);
	const contentInput = document.querySelector("#contentInput" + i);

	hideButtons(i);
	if (colorButton.classList.contains("hidden")) {
		changeBtn(grayButton, colorButton);
		changeBtn(dailyGrayButton, dailyColorButton);
		changeBtn(goalColorButton, goalGrayButton);
		showButtons("addSentence", i);

		resetData(i);
		titleBox.classList.add("hidden");
		title.required = false;
		contentInput.placeholder = "명언이나 목표를 작성해주세요.";

		if (sentence === undefined) {
			changeBtn(editSentenceButton, addSentenceButton);
		} else {
			changeBtn(addSentenceButton, editSentenceButton);
			loadSentence(i, sentence);
		}
	} else {
		title.required = true;
		changeBtn(colorButton, grayButton);
		showButtons("addPlan", i);
		resetData(i);
		titleBox.classList.remove("hidden");
		contentInput.placeholder = "상세 내용을 입력해주세요.";
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

	if (feedback.title !== null) title.value = feedback.title;
	if (feedback.content !== null) content.value = feedback.content;
	checkRating(i, feedback.rating);
}

function clickFeedback(i, plan) {
	const slideDownButton = document.querySelector("#downImage" + i);
	const planId = document.querySelector("#idInput" + i);
	const titleBox = document.querySelector("#titleBox" + i);
	const contentInput = document.querySelector("#contentInput" + i);
	const title = document.querySelector("#titleInput" + i);

	if (titleBox.classList.contains("hidden")) {
		// titleBox가 숨어있다.
		// sentence 관련 작업 중
		titleBox.classList.remove("hidden");
		clickSentence(i, null);
	}
	hideButtons(i);
	title.required = false;
	if (slideDownButton.classList.contains("hidden")) {
		// down 버튼이 숨어있다.
		// 슬라이드가 내려가있다.
		slidePlanDetail(i);
		planId.value = plan.id;
		title.placeholder = "피드백";
		if (plan.feedback !== undefined) {
			showButtons("editFeedback", i);
			loadFeedback(i, plan.feedback);
		} else showButtons("addFeedback", i);
	} else if (planId.value === plan.id) {
		// feedback 버튼 두 번 클릭
		slidePlanDetail(i);
		resetData(i);
		showButtons("addPlan", i);
		planId.value = "";
		title.placeholder = "할 일";
	} else if (plan.feedback !== undefined) {
		// feedback 처음 누르는데 내용이 있음
		planId.value = plan.id;
		title.placeholder = "피드백";
		loadFeedback(i, plan.feedback);
		showButtons("editFeedback", i);
	} else {
		// 내용이 없으면
		planId.value = plan.id;
		title.placeholder = "피드백";
		showButtons("addFeedback", i);
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
	} else if (planId.value === plan.id) {
		slidePlanDetail(i);
		resetData(i);
		showButtons("addPlan", i);
	} else {
		loadPlan(i, plan);
		showButtons("editPlan", i);
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

function init() {
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
	window.checkRating = checkRating;
	window.showDetail = showDetail;
}

init();
