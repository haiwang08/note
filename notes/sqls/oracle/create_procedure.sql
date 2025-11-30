CREATE OR REPLACE PROCEDURE sync_employee_data AS
BEGIN
    INSERT INTO employees_proceeded (emp_id, emp_name, salary, hire_date)
    SELECT emp_id,
           emp_name,
           salary,
           hire_date
    FROM employees
    -- WHERE emp_id NOT IN (SELECT emp_id FROM employees_proceeded);

    COMMIT;
END;
/


CREATE OR REPLACE PROCEDURE test_proc AS
BEGIN
  DBMS_OUTPUT.PUT_LINE('Hello');
END;
/
