document.addEventListener('DOMContentLoaded', () => {
    const questionBank = document.getElementById('questionBank');
    const questionCreation = document.getElementById('questionCreation');
    const questionsContainer = document.getElementById('questionsContainer');

    questionBank.addEventListener('change', () => {
        if (questionBank.value === 'create') {
            questionCreation.style.display = 'block';
        } else {
            questionCreation.style.display = 'none';
        }
    });
});

function addQuestion(type) {
    const questionsContainer = document.getElementById('questionsContainer');
    const questionId = Date.now(); // Unique ID for each question

    let questionHtml = '';
    switch (type) {
        case 'multipleChoice':
            questionHtml = `
                <div class="question" id="question-${questionId}">
                    <h4>Multiple Choice Question</h4>
                    <label>Question Text:</label>
                    <input type="text" name="questionText-${questionId}" required>
                    <label>Options:</label>
                    <input type="text" name="optionA-${questionId}" placeholder="Option A" required>
                    <input type="text" name="optionB-${questionId}" placeholder="Option B" required>
                    <input type="text" name="optionC-${questionId}" placeholder="Option C">
                    <input type="text" name="optionD-${questionId}" placeholder="Option D">
                </div>
            `;
            break;
        case 'shortAnswer':
            questionHtml = `
                <div class="question" id="question-${questionId}">
                    <h4>Short Answer Question</h4>
                    <label>Question Text:</label>
                    <input type="text" name="questionText-${questionId}" required>
                </div>
            `;
            break;
        case 'essay':
            questionHtml = `
                <div class="question" id="question-${questionId}">
                    <h4>Essay Question</h4>
                    <label>Question Text:</label>
                    <input type="text" name="questionText-${questionId}" required>
                </div>
            `;
            break;
        case 'trueFalse':
            questionHtml = `
                <div class="question" id="question-${questionId}">
                    <h4>True/False Question</h4>
                    <label>Question Text:</label>
                    <input type="text" name="questionText-${questionId}" required>
                    <label>Answer:</label>
                    <select name="answer-${questionId}">
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </div>
            `;
            break;
    }

    questionsContainer.innerHTML += questionHtml;
}

function previewAssessment() {
    // Logic for previewing the assessment goes here
    alert('Preview feature is not implemented yet.');
}
