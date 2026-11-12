(function () {
  "use strict";

  const STORAGE_KEY = "gorev-takip:tasks";

  const form = document.getElementById("task-form");
  const input = document.getElementById("task-input");
  const list = document.getElementById("task-list");
  const counter = document.getElementById("counter");
  const clearDone = document.getElementById("clear-done");
  const filterButtons = document.querySelectorAll(".filters button");

  let tasks = load();
  let filter = "all";

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch {
      /* depolama kullanılamıyorsa sessizce devam et */
    }
  }

  function newId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }

  function visibleTasks() {
    if (filter === "active") return tasks.filter((t) => !t.done);
    if (filter === "done") return tasks.filter((t) => t.done);
    return tasks;
  }

  function render() {
    list.replaceChildren();
    for (const task of visibleTasks()) {
      const li = document.createElement("li");
      li.className = "task" + (task.done ? " done" : "");
      li.dataset.id = task.id;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.done;
      checkbox.setAttribute("aria-label", "Tamamlandı olarak işaretle");

      const text = document.createElement("span");
      text.className = "text";
      text.textContent = task.text;

      const del = document.createElement("button");
      del.type = "button";
      del.className = "delete";
      del.textContent = "×";
      del.setAttribute("aria-label", "Görevi sil");

      li.append(checkbox, text, del);
      list.append(li);
    }

    const remaining = tasks.filter((t) => !t.done).length;
    counter.textContent = remaining + " görev kaldı";
    clearDone.hidden = !tasks.some((t) => t.done);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    tasks.push({ id: newId(), text, done: false });
    input.value = "";
    save();
    render();
  });

  list.addEventListener("click", (e) => {
    const li = e.target.closest(".task");
    if (!li) return;
    const id = li.dataset.id;

    if (e.target.matches('input[type="checkbox"]')) {
      const task = tasks.find((t) => t.id === id);
      if (task) task.done = e.target.checked;
    } else if (e.target.matches(".delete")) {
      tasks = tasks.filter((t) => t.id !== id);
    } else {
      return;
    }
    save();
    render();
  });

  for (const btn of filterButtons) {
    btn.addEventListener("click", () => {
      filter = btn.dataset.filter;
      filterButtons.forEach((b) => b.classList.toggle("active", b === btn));
      render();
    });
  }

  clearDone.addEventListener("click", () => {
    tasks = tasks.filter((t) => !t.done);
    save();
    render();
  });

  render();
})();
