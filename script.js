document.addEventListener('DOMContentLoaded', () => {
    const subjectsList = document.getElementById('subjects-list');
    const addSubjectBtn = document.getElementById('add-subject');
    const subjectCountInput = document.getElementById('subject-count');
    const gpaResult = document.getElementById('gpa-result');
    const cgpaResult = document.getElementById('cgpa-result');
    const MAX_SUBJECTS = 80;

    // Generate subject fields based on user input
    addSubjectBtn.addEventListener('click', () => {
        let count = parseInt(subjectCountInput.value);
        if (isNaN(count) || count < 1) {
            alert('Please enter a valid number of subjects.');
            return;
        }
        if (count > MAX_SUBJECTS) {
            alert('Maximum number of subjects (80) reached!');
            count = MAX_SUBJECTS;
        }
        subjectsList.innerHTML = '';
        for (let i = 0; i < count; i++) {
            addSubject(i + 1);
        }
    });

    function addSubject(number) {
        const subjectDiv = document.createElement('div');
        subjectDiv.className = 'subject-item';
        subjectDiv.innerHTML = `
            <input type="text" class="subject-name" placeholder="Subject Name (Optional)">
            <span class="subject-number" style="margin-left:8px; background:#333; color:#4d9fff; border-radius:50%; width:28px; height:28px; display:inline-flex; align-items:center; justify-content:center; border:1px solid #404040;">${number}</span>
            <div class="marks-group">
                <input type="number" class="obtained-marks" placeholder="Obtained Marks" min="0" step="1">
                <select class="total-marks">
                    <option value="20">20</option>
                    <option value="40">40</option>
                    <option value="60" selected>60</option>
                    <option value="80">80</option>
                    <option value="100">100</option>
                </select>
            </div>
            <div class="grade-display">-</div>
            <button class="btn-delete">×</button>
        `;

        // Delete button functionality
        const deleteBtn = subjectDiv.querySelector('.btn-delete');
        deleteBtn.addEventListener('click', () => {
            subjectDiv.remove();
            updateSubjectNumbers();
            calculateGPA();
        });

        // Input event listeners for GPA calculation
        const inputs = subjectDiv.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                updateGrade(subjectDiv);
                calculateGPA();
            });
        });

        subjectsList.appendChild(subjectDiv);
    }

    function updateSubjectNumbers() {
        const subjects = document.querySelectorAll('.subject-item .subject-number');
        subjects.forEach((el, idx) => {
            el.textContent = idx + 1;
        });
    }

    function getQualityPointsAndGrade(marks, totalMarks) {
        if (totalMarks === 20) {
            if (marks >= 16) return { points: 4, grade: 'A' };
            if (marks >= 15) return { points: 3.67, grade: 'B' };
            if (marks >= 14) return { points: 3.33, grade: 'B' };
            if (marks >= 13) return { points: 3, grade: 'B' };
            if (marks >= 12) return { points: 2.67, grade: 'C' };
            if (marks >= 11) return { points: 2.33, grade: 'C' };
            if (marks >= 10) return { points: 2, grade: 'C' };
            if (marks >= 9) return { points: 1.5, grade: 'D' };
            if (marks >= 8) return { points: 1, grade: 'D' };
            return { points: 0, grade: 'F' };
        }
        
        if (totalMarks === 40) {
            if (marks >= 32) return { points: 8, grade: 'A' };
            if (marks >= 31) return { points: 7.67, grade: 'B' };
            if (marks >= 30) return { points: 7.33, grade: 'B' };
            if (marks >= 29) return { points: 7, grade: 'B' };
            if (marks >= 28) return { points: 6.67, grade: 'B' };
            if (marks >= 27) return { points: 6.33, grade: 'B' };
            if (marks >= 26) return { points: 6, grade: 'B' };
            if (marks >= 25) return { points: 5.67, grade: 'C' };
            if (marks >= 24) return { points: 5.33, grade: 'C' };
            if (marks >= 23) return { points: 5, grade: 'C' };
            if (marks >= 22) return { points: 4.67, grade: 'C' };
            if (marks >= 21) return { points: 4.33, grade: 'C' };
            if (marks >= 20) return { points: 4, grade: 'C' };
            if (marks >= 19) return { points: 3.5, grade: 'D' };
            if (marks >= 18) return { points: 3, grade: 'D' };
            if (marks >= 17) return { points: 2.5, grade: 'D' };
            if (marks >= 16) return { points: 2, grade: 'D' };
            return { points: 0, grade: 'F' };
        }

        if (totalMarks === 60) {
            if (marks >= 48) return { points: 12, grade: 'A' };
            if (marks >= 47) return { points: 11.67, grade: 'B' };
            if (marks >= 46) return { points: 11.33, grade: 'B' };
            if (marks >= 45) return { points: 11, grade: 'B' };
            if (marks >= 44) return { points: 10.67, grade: 'B' };
            if (marks >= 43) return { points: 10.33, grade: 'B' };
            if (marks >= 42) return { points: 10, grade: 'B' };
            if (marks >= 41) return { points: 9.67, grade: 'B' };
            if (marks >= 40) return { points: 9.33, grade: 'B' };
            if (marks >= 39) return { points: 9, grade: 'B' };
            if (marks >= 38) return { points: 8.67, grade: 'C' };
            if (marks >= 37) return { points: 8.33, grade: 'C' };
            if (marks >= 36) return { points: 8, grade: 'C' };
            if (marks >= 35) return { points: 7.67, grade: 'C' };
            if (marks >= 34) return { points: 7.33, grade: 'C' };
            if (marks >= 33) return { points: 7, grade: 'C' };
            if (marks >= 32) return { points: 6.67, grade: 'C' };
            if (marks >= 31) return { points: 6.33, grade: 'C' };
            if (marks >= 30) return { points: 6, grade: 'C' };
            if (marks >= 29) return { points: 5.5, grade: 'D' };
            if (marks >= 28) return { points: 5, grade: 'D' };
            if (marks >= 27) return { points: 4.5, grade: 'D' };
            if (marks >= 26) return { points: 4, grade: 'D' };
            if (marks >= 25) return { points: 3.5, grade: 'D' };
            if (marks >= 24) return { points: 3, grade: 'D' };
            return { points: 0, grade: 'F' };
        }

        if (totalMarks === 80) {
            if (marks >= 64) return { points: 16, grade: 'A' };
            if (marks >= 63) return { points: 15.67, grade: 'B' };
            if (marks >= 62) return { points: 15.33, grade: 'B' };
            if (marks >= 61) return { points: 15, grade: 'B' };
            if (marks >= 60) return { points: 14.67, grade: 'B' };
            if (marks >= 59) return { points: 14.33, grade: 'B' };
            if (marks >= 58) return { points: 14, grade: 'B' };
            if (marks >= 57) return { points: 13.67, grade: 'B' };
            if (marks >= 56) return { points: 13.33, grade: 'B' };
            if (marks >= 55) return { points: 13, grade: 'B' };
            if (marks >= 54) return { points: 12.67, grade: 'B' };
            if (marks >= 53) return { points: 12.33, grade: 'B' };
            if (marks >= 52) return { points: 12, grade: 'B' };
            if (marks >= 51) return { points: 11.67, grade: 'C' };
            if (marks >= 50) return { points: 11.33, grade: 'C' };
            if (marks >= 49) return { points: 11, grade: 'C' };
            if (marks >= 48) return { points: 10.67, grade: 'C' };
            if (marks >= 47) return { points: 10.33, grade: 'C' };
            if (marks >= 46) return { points: 10, grade: 'C' };
            if (marks >= 45) return { points: 9.67, grade: 'C' };
            if (marks >= 44) return { points: 9.33, grade: 'C' };
            if (marks >= 43) return { points: 9, grade: 'C' };
            if (marks >= 42) return { points: 8.67, grade: 'C' };
            if (marks >= 41) return { points: 8.33, grade: 'C' };
            if (marks >= 40) return { points: 8, grade: 'C' };
            if (marks >= 39) return { points: 7.5, grade: 'D' };
            if (marks >= 38) return { points: 7, grade: 'D' };
            if (marks >= 37) return { points: 6.5, grade: 'D' };
            if (marks >= 36) return { points: 6, grade: 'D' };
            if (marks >= 35) return { points: 5.5, grade: 'D' };
            if (marks >= 34) return { points: 5, grade: 'D' };
            if (marks >= 33) return { points: 4.5, grade: 'D' };
            if (marks >= 32) return { points: 4, grade: 'D' };
            return { points: 0, grade: 'F' };
        }

        if (totalMarks === 100) {
            if (marks >= 80) return { points: 20, grade: 'A' };
            if (marks >= 79) return { points: 19.67, grade: 'B' };
            if (marks >= 78) return { points: 19.33, grade: 'B' };
            if (marks >= 77) return { points: 19, grade: 'B' };
            if (marks >= 76) return { points: 18.67, grade: 'B' };
            if (marks >= 75) return { points: 18.33, grade: 'B' };
            if (marks >= 74) return { points: 18, grade: 'B' };
            if (marks >= 73) return { points: 17.67, grade: 'B' };
            if (marks >= 72) return { points: 17.33, grade: 'B' };
            if (marks >= 71) return { points: 17, grade: 'B' };
            if (marks >= 70) return { points: 16.67, grade: 'B' };
            if (marks >= 69) return { points: 16.33, grade: 'B' };
            if (marks >= 68) return { points: 16, grade: 'B' };
            if (marks >= 67) return { points: 15.67, grade: 'B' };
            if (marks >= 66) return { points: 15.33, grade: 'B' };
            if (marks >= 65) return { points: 15, grade: 'B' };
            if (marks >= 64) return { points: 14.67, grade: 'C' };
            if (marks >= 63) return { points: 14.33, grade: 'C' };
            if (marks >= 62) return { points: 14, grade: 'C' };
            if (marks >= 61) return { points: 13.67, grade: 'C' };
            if (marks >= 60) return { points: 13.33, grade: 'C' };
            if (marks >= 59) return { points: 13, grade: 'C' };
            if (marks >= 58) return { points: 12.67, grade: 'C' };
            if (marks >= 57) return { points: 12.33, grade: 'C' };
            if (marks >= 56) return { points: 12, grade: 'C' };
            if (marks >= 55) return { points: 11.67, grade: 'C' };
            if (marks >= 54) return { points: 11.33, grade: 'C' };
            if (marks >= 53) return { points: 11, grade: 'C' };
            if (marks >= 52) return { points: 10.67, grade: 'C' };
            if (marks >= 51) return { points: 10.33, grade: 'C' };
            if (marks >= 50) return { points: 10, grade: 'C' };
            if (marks >= 49) return { points: 9.5, grade: 'D' };
            if (marks >= 48) return { points: 9, grade: 'D' };
            if (marks >= 47) return { points: 8.5, grade: 'D' };
            if (marks >= 46) return { points: 8, grade: 'D' };
            if (marks >= 45) return { points: 7.5, grade: 'D' };
            if (marks >= 44) return { points: 7, grade: 'D' };
            if (marks >= 43) return { points: 6.5, grade: 'D' };
            if (marks >= 42) return { points: 6, grade: 'D' };
            if (marks >= 41) return { points: 5.5, grade: 'D' };
            if (marks >= 40) return { points: 5, grade: 'D' };
            return { points: 0, grade: 'F' };
        }

        return { points: 0, grade: 'F' };
    }

    function getCreditHours(totalMarks) {
        // Credit hours based on total marks as specified
        if (totalMarks === 20) return 1;
        if (totalMarks === 40) return 2;
        if (totalMarks === 60) return 3;
        if (totalMarks === 80) return 4;
        if (totalMarks === 100) return 5;
        return 0;
    }

    function updateGrade(subjectDiv) {
        const obtainedMarks = parseInt(subjectDiv.querySelector('.obtained-marks').value);
        const totalMarks = parseInt(subjectDiv.querySelector('.total-marks').value);
        const gradeDisplay = subjectDiv.querySelector('.grade-display');

        if (!isNaN(obtainedMarks) && !isNaN(totalMarks) && obtainedMarks <= totalMarks) {
            const { points, grade } = getQualityPointsAndGrade(obtainedMarks, totalMarks);
            gradeDisplay.textContent = `${grade} (${points.toFixed(2)})`;
        } else {
            gradeDisplay.textContent = '-';
        }
    }

    function calculateGPA() {
        // Step 1: Add all quality points
        let totalQualityPoints = 0;
        // Step 2: Add all credit hours
        let totalCredits = 0;

        const subjects = document.querySelectorAll('.subject-item');
        
        subjects.forEach(subject => {
            const obtainedMarks = parseInt(subject.querySelector('.obtained-marks').value);
            const totalMarks = parseInt(subject.querySelector('.total-marks').value);
            
            if (!isNaN(obtainedMarks) && !isNaN(totalMarks) && obtainedMarks <= totalMarks) {
                // Get credit hours based on total marks
                const credits = getCreditHours(totalMarks);
                
                // Get quality points for this subject
                const { points } = getQualityPointsAndGrade(obtainedMarks, totalMarks);
                
                // Add to totals
                totalQualityPoints += points;
                totalCredits += credits;
            }
        });

        // Step 3: Divide total quality points by total credit hours
        const gpa = totalCredits > 0 ? (totalQualityPoints / totalCredits).toFixed(2) : '0.00';
        gpaResult.textContent = gpa;
        cgpaResult.textContent = gpa;
    }

    // CGPA Calculator Section
    const gpaModeBtn = document.getElementById('gpa-mode-btn');
    const cgpaModeBtn = document.getElementById('cgpa-mode-btn');
    const gpaSection = document.getElementById('gpa-section');
    const cgpaSection = document.getElementById('cgpa-section');

    // Toggle between GPA and CGPA sections
    gpaModeBtn.addEventListener('click', () => {
        gpaSection.style.display = '';
        cgpaSection.style.display = 'none';
        gpaModeBtn.classList.add('active');
        cgpaModeBtn.classList.remove('active');
    });

    cgpaModeBtn.addEventListener('click', () => {
        gpaSection.style.display = 'none';
        cgpaSection.style.display = '';
        cgpaModeBtn.classList.add('active');
        gpaModeBtn.classList.remove('active');
    });

    // CGPA from Semester GPAs functionality
    const gpaList = document.getElementById('gpa-list');
    const addGpaBtn = document.getElementById('add-gpa-btn');
    const cgpaSemResult = document.getElementById('cgpa-sem-result');

    function addGpaInput() {
        const row = document.createElement('div');
        row.className = 'gpa-input-row';
        row.innerHTML = `
            <input type="number" step="0.01" min="0" max="4" class="gpa-value" placeholder="GPA">
            <button class="btn-delete" title="Remove">×</button>
        `;
        
        const input = row.querySelector('input');
        input.addEventListener('input', updateCgpaFromSemesters);
        
        row.querySelector('.btn-delete').addEventListener('click', () => {
            row.remove();
            updateCgpaFromSemesters();
        });
        
        gpaList.appendChild(row);
    }

    function updateCgpaFromSemesters() {
        const gpaInputs = gpaList.querySelectorAll('.gpa-value');
        let sum = 0, count = 0;
        
        gpaInputs.forEach(input => {
            const val = parseFloat(input.value);
            if (!isNaN(val) && val >= 0 && val <= 4) {
                sum += val;
                count++;
            }
        });
        
        cgpaSemResult.textContent = count > 0 ? (sum / count).toFixed(3) : '0.00';
    }

    addGpaBtn.addEventListener('click', addGpaInput);

    // CGPA from previous CGPA and current GPA functionality
    const prevCgpa = document.getElementById('prev-cgpa');
    const prevSemesters = document.getElementById('prev-semesters');
    const currentGpa = document.getElementById('current-gpa');
    const updatedCgpaResult = document.getElementById('updated-cgpa-result');

    [prevCgpa, prevSemesters, currentGpa].forEach(input => {
        input.addEventListener('input', updateCgpaFromPrevious);
    });

    function updateCgpaFromPrevious() {
        const cgpa = parseFloat(prevCgpa.value);
        const semesters = parseInt(prevSemesters.value);
        const gpa = parseFloat(currentGpa.value);

        if (!isNaN(cgpa) && !isNaN(semesters) && !isNaN(gpa) &&
            cgpa >= 0 && cgpa <= 4 && semesters > 0 && gpa >= 0 && gpa <= 4) {
            const updatedCgpa = ((cgpa * semesters) + gpa) / (semesters + 1);
            updatedCgpaResult.textContent = updatedCgpa.toFixed(3);
        } else {
            updatedCgpaResult.textContent = '0.00';
        }
    }

    // Add initial GPA input field
    addGpaInput();

    // Add this to your existing DOMContentLoaded event listener
    const dropdown = document.querySelector('.dropdown');
    const dropdownHeader = document.querySelector('.dropdown-header');

    dropdownHeader.addEventListener('click', () => {
        dropdown.classList.toggle('active');
    });

    // Add inside DOMContentLoaded event listener
    const appDownloadSection = document.querySelector('.app-download-section');
    const appDownloadHeader = appDownloadSection.querySelector('.dropdown-header');

    appDownloadHeader.addEventListener('click', () => {
        appDownloadSection.classList.toggle('active');
    });
});
