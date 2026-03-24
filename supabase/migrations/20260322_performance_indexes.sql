-- Performance indexes
CREATE INDEX IF NOT EXISTS idx_quiz_questions_quiz_id ON public.quiz_questions(quiz_id);
CREATE INDEX IF NOT EXISTS idx_quiz_options_question_id ON public.quiz_options(question_id);
CREATE INDEX IF NOT EXISTS idx_progress_user_lesson ON public.progress(user_id, lesson_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_user_course ON public.enrollments(user_id, course_id);
CREATE INDEX IF NOT EXISTS idx_activity_log_user ON public.activity_log(user_id);
CREATE INDEX IF NOT EXISTS idx_notes_user_lesson ON public.notes(user_id, lesson_id);

-- Trigger to auto-update courses.total_alunos
CREATE OR REPLACE FUNCTION update_course_student_count()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE courses SET total_alunos = (
    SELECT COUNT(DISTINCT user_id) FROM enrollments
    WHERE course_id = COALESCE(NEW.course_id, OLD.course_id)
    AND status = 'ativo'
  ) WHERE id = COALESCE(NEW.course_id, OLD.course_id);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_update_student_count ON enrollments;
CREATE TRIGGER trg_update_student_count
  AFTER INSERT OR UPDATE OR DELETE ON enrollments
  FOR EACH ROW EXECUTE FUNCTION update_course_student_count();
