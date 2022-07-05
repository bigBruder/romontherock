const getMessagesForPassedStudents = {allStudents, retakeStudents} => allStudents
.filter(name => retakeStudents.indexOf(name) === -1)
.map(name => 'Good job, ' + name);