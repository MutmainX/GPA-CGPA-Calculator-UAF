document.addEventListener('DOMContentLoaded', () => {
     const subjectsList = document.getElementById('subjects-list');
     const addSubjectBtn = document.getElementById('add-subject');
     const gpaResult = document.getElementById('gpa-result');
     const cgpaResult = document.getElementById('cgpa-result');
 
     let subjectCount = 0;
     const MAX_SUBJECTS = 80;
 
     // Add subject button click handler
     addSubjectBtn.addEventListener('click', () => {
         if (subjectCount >= MAX_SUBJECTS) {
             alert('Maximum number of subjects (80) reached!');
             return;
         }
         addSubject();
     });
 
     function addSubject() {
         const subjectDiv = document.createElement('div');
         subjectDiv.className = 'subject-item';
         subjectDiv.innerHTML = `
             <input type="text" placeholder="Subject Name (Optional)" class="subject-name">
             <input type="number" placeholder="Obtained Marks" class="obtained-marks" min="0" step="1">
             <select class="total-marks">
                 <option value="20">20</option>
                 <option value="40">40</option>
                 <option value="60">60</option>
                 <option value="80">80</option>
                 <option value="100">100</option>
             </select>
             <span class="grade-display"></span>
             <input type="text" class="subject-name" placeholder="Subject Name (Optional)">
             <button class="btn-delete">×</button>
             <div class="marks-group">
                 <input type="number" class="obtained-marks" placeholder="Obtained Marks" min="0" step="1">
                 <select class="total-marks">
                     <option value="20">20</option>
                     <option value="40">40</option>
                     <option value="60">60</option>
                     <option value="80">80</option>
                     <option value="100">100</option>
                 </select>
             </div>
             <div class="grade-display">-</div>
         `;
 
         // Add delete button functionality
         gpaResult.textContent = gpa;
         cgpaResult.textContent = gpa;
     }
 }); 
 }); 
